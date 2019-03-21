## Splunk Version Compatibility

| Splunk Version | App Version |
| --- | --- |
| Splunk 7 | Palo Alto Networks App 5.4 and 6.x |
| Splunk 6 | Palo Alto Networks App 4.x, 5.x, 6.x |
| Splunk 5 | Palo Alto Networks App 3.x |

## Compatibility between App and Add-on \(TA\):

| App | Add-on \(TA\) |
| --- | --- |
| Version 6.0 | Splunk\_TA\_paloalto 6.0 |
| Version 5.4 | Splunk\_TA\_paloalto 3.8 |
| Version 5.3 | Splunk\_TA\_paloalto 3.7 |
| Version 5.2 | Splunk\_TA\_paloalto 3.6 |
| Version 5.1 | Splunk\_TA\_paloalto 3.6 |
| Version 5.0 | Splunk\_TA\_paloalto 3.5 or 3.6 |
| Version 4.x | No Add-on required |
| Version 3.x | No Add-on required |

> #### primary::Note
>
> The Add-on \(TA\) called TA\_paloalto is deprecated and should be replaced with Splunk\_TA\_paloalto.

## Firewall and Panorama Support

| Firewall/Panorama | App / Add-on |
| --- | --- |
| PAN-OS 8.0 and higher | Add-on 6.0.0 and higher |
| PAN-OS 7.0 | Add-on 3.5.1 and higher |
| PAN-OS 4.0 - 6.1 | Any Add-on version |

Correlation logs are supported from PAN-OS 7.1.10 and higher. Prior to 7.1.10, the correlation logs had a different format which is not supported.

## Traps Advanced Endpoint Security Support:

| Traps | App / Add-on |
| --- | --- |
| Traps 5.x | Add-on 6.1 and higher |
| Traps 3.4 and 4.x | Add-on 3.8 and higher |
| Traps 3.3.2 and higher | Add-on 3.6 and higher |
| Traps 3.3.0 and 3.3.1 | Not supported |
| Traps 3.2.x | App 4.2 or Add-on 3.5.x with App 5.0 |

## Cortex Data Lake

Logs can be forwarded from Cortex Data Lake to Splunk Enterprise or Splunk Cloud by using the Log Forwarding App in Cortex.

More information in the [Log Forwarding App Documentation](https://docs.paloaltonetworks.com/cloud-services/apps/log-forwarding/log-forwarding-app-getting-started/get-started-with-log-fowarding-app/forward-logs-from-logging-service-to-syslog-server)

## MineMeld Support

Starting in App/Add-on 6.0.0, MineMeld 0.9.34 and higher are supported. MineMeld hosted in AutoFocus by Palo Alto Networks is above this version, so it is supported.

