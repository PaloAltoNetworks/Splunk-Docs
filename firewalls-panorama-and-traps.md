Firewalls, Panorama, and Traps
==============================

## Logging architectures

**Firewalls** can send logs to Splunk directly, or they can send logs to Panorama or a Log Collector which forwards the logs to Splunk.

**Panorama** sends its own logs to Splunk and can forward logs from firewalls to Splunk

**Traps** can send logs to Splunk and Panorama, but Panorama does not forward Traps logs to Splunk

**Syslog-ng and Universal Forwarder** An alternative to sending the logs directly to Splunk, it is common to send logs to a syslog-ng or other intermediate syslog server, then forward the logs from there with a Splunk Universal Forwarder. For instruction on how to do this, please skip this article and go to the [Syslog-ng and Universal Forwarder Guide](universal-forwarder.md).

**Syslog to Splunk using the following protocols:**

| Product                           | Syslog Protocols |
|-----------------------------------|------------------|
| Next-generation Firewall          | UDP, TCP, or SSL |
| Panorama                          | UDP, TCP, or SSL |
| Traps Endpoint Security >= 3.3    | UDP, TCP, or SSL |
| Traps Endpoint Security 3.2       | UDP              |

## Create a data input

Use the GUI to create a Data Input, or create it in inputs.conf using the CLI.

Firewalls, Panorama, and Traps ESM can all send logs to the same data input and port. The Add-on will automatically detect the source of each log and parse it correctly.

### GUI

- In the top right corner, click **Settings** -> **Data inputs**
- In the row for **UDP** or **TCP** click **Add new** (SSL Data Inputs can't be created in the GUI)
- Enter a port number and click **Next**
- Click **Select Sourcetype** -> **Network & Security** -> **pan:log**
- Change the **App Context** to the Palo Alto Networks Add-on
- Set any other settings such as Method or Index as appropriate for your environment
- Click **Review**, followed by **Submit**

### CLI

Create the inputs.conf in the correct directory:
`$SPLUNK_HOME/etc/apps/Splunk_TA_paloalto/local/inputs.conf`

> #### primary::Note
>
> The `local` directory is not created during installation, so you may need to create it. Also, the inputs.conf does not have to be in the Add-on directory, but this is the conventional place to put it.

Add the following lines to the `inputs.conf` file. This examples uses the default syslog port UDP 514. Change the port as needed. :

    ## App version 5.x/6.x with Add-on

    [udp://514]
    sourcetype = pan:log
    no_appending_timestamp = true

    ## App version 4.x and 3.x

    [udp://514]
    index = pan_logs
    sourcetype = pan_log
    no_appending_timestamp = true

The `sourcetype`, and `no_appending_timestamp` setting must be set exactly as in the example. For TCP or SSL syslogs, remove the `no_appending_timestamp` setting. The `index` must be set to `pan_logs` for App version 4.x and 3.x, but can be set to anything you want (or left blank for the default index) when using the Add-on.

## Configure the Firewall or Endpoint Security Manager

There are two ways to send logs from a Next generation Firewall to Splunk:

1.  All firewalls syslog directly to Splunk
2.  All firewalls log to Panorama, then Panorama syslogs to Splunk

The Palo Alto Networks syslog documentation describes each option in detail:

**Firewall and Panorama syslog to Splunk:**
<https://www.paloaltonetworks.com/documentation/70/pan-os/pan-os/monitoring/use-external-services-for-monitoring.html>

**Traps Endpoint Security Manager (ESM) syslog to Splunk:**
<https://www.paloaltonetworks.com/documentation/33/endpoint/endpoint-admin-guide/reports-and-logging/forward-logs-to-a-syslog-server>

> #### primary::Note
>
> Firewall and Panorama logs must be sent in the default format.  
> Traps logs must be in CEF format (CEF is the default on ESM).

## Test the configuration

The easiest way to test that everything is working is to configure the firewall to syslog all config events. On the firewall or Panorama, navigate to the **Device** tab, then **Log Settings**. Enable config logs and commit the configuration.

Now, make any configuration change and the firewall to produce a config event syslog. You don't have to commit the change for the syslog to be produced; any uncommitted change to the configuration produces a log.

Verify the log reached Splunk by going to the Palo Alto Networks App click Search in the navigation bar, and enter:

    eventtype=pan_config

> #### primary::Note
>
> Use the default Search app if using just the Palo Alto Networks Add-on.

If Splunk is getting the syslogs from the firewall and parsing them correctly, then you'll see the config event syslogs show up here from the changes you made on the firewall configuration.

If you don't see the syslog, verify the steps above or try the [Troubleshooting Guide](troubleshoot.md).

