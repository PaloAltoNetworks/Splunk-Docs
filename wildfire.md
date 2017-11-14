WildFire
========

The Palo Alto Networks App can download a behavioral fingerprint of any malware seen by WildFire on your network in the form of a [WildFire report](https://www.paloaltonetworks.com/documentation/70/wildfire/wf_admin/monitor-wildfire-activity/wildfire-analysis-reports-close-up.html). This report is indexed by Splunk and can be used for advanced correlations to detect malicious behavior and indicators of compromise.

Two steps are needed to enable WildFire report indexing:

## Add the Wildfire API key

The WildFire API key is found in the WildFire portal on the **Account** tab: <https://wildfire.paloaltonetworks.com>

Navigate to the **Palo Alto Networks Add-on**, then click the **Configuration** tab at the top.  Click the **Add-on Settings** tab. Enter your WildFire API key into the field.

![](/assets/wildfire-api-key.png)

## Send WildFire logs to Splunk from a Firewall or Panorama

To send WildFire logs to Splunk, you must configure the firewall (or Panorama) with a syslog server, a log forwarding profile that includes WildFire logs, and a security rule with a the log forwarding profile and a WildFire profile attached. Use the following links to configure WildFire logging:

-   [Configure syslog and log forwarding profiles](https://www.paloaltonetworks.com/documentation/70/pan-os/pan-os/monitoring/configure-syslog-monitoring.html)
-   [Configure WildFire (PAN-OS 7.0)](https://www.paloaltonetworks.com/documentation/70/wildfire/wf_admin/submit-files-for-wildfire-analysis/forward-files-for-wildfire-analysis.html)
-   [Configure WildFire (PAN-OS 6.1 and earlier)](https://www.paloaltonetworks.com/documentation/61/wildfire/wf_admin/wildfire-cloud-file-analysis/forward-samples-to-the-wildfire-cloud.html)

> #### primary::Note
>
> The WildFire API key won't be used unless there are WildFire logs coming from the Firewall or Panorama. The WildFire API key is leveraged to get more context around the syslogs from the firewall.

After you've completed both steps, you should see the WildFire dashboard start to populate with data. If not, verify the WildFire and logging configuration on the firewall.

![WildFire dashboard with data](/assets/wildfire_dashboard.png)