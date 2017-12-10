---
title: "Using SSH with TeamCity"
---
As part of our TeamCity build jobs in Azure we needed to extract data from a Software as a Service (SaaS) SAP installation, but we only had access to the SAP system from within our own network because of the SaaS provider's white list policy. Adding our Azure build agents to the white list was not an option as build agents were created as needed and disposed after a given period of inactivity. 

That TeamCity agents were created as needed also limits the ability to configure SSH for the user running the actual TeamCity build process as this configuration would be wiped for each new agent because of `sysprep`.

However we had the possibility of opening a SSH tunnel with local port forwarding to a machine within our network and this access the SAP installation.

So for better or for worse that is what we decided to do. This post describes the solution and the process of arriving at that solution plus identifying a few shortcomings. The purpose of this post is primarily to document the process and solution for myself and secondly to help others.

* Create a passphraseless SSH key for accessing the SSH tunnel. ```ssh-keygen -t rsa -b 2048```
* Store the passphraseless SSH key in TeamCity using the [built-in functionality for uploading an SSH key](https://confluence.jetbrains.com/display/TCD10/SSH+Keys+Management). 
* Use [TeamCity's built-in SSH Agent](https://confluence.jetbrains.com/display/TCD10/SSH+Agent) functionality for opening a tunnel to the machine on our local network.

However the main problem with this approach was that the SSH Agent keeps the tunnel open as long as the TeamCity agent is active. So a way to close the tunnel again was needed.

So we used the SSH config file to use the `ControlMaster` feature so that we could the SSH connection. 

```
Host <DNS entry>
BatchMode yes
ControlMaster auto
ControlPath ~/.ssh/ssh-%u-%i-%r@%h-%p
ExitOnForwardFailure yes
LocalForward <local port> <remote IP>:<remote port>
StrictHostKeyChecking no
User <Username for SSH tunnel>
```

By using the control master it is possible to open the connection t the beginning of the build job:

```
ssh -F "./ssh/config" -fn -M -N -T <DNS entry>
```

and at the end of a build job simply shutdown the connection:

```
ssh -F "./ssh/config" -T -O "exit" -o "LogLevel=ERROR" <DNS entry>
```

See the [SSH Manpage](https://man.openbsd.org/ssh) for explanations of the different switches used.
