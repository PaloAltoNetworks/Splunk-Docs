# Splunk Enterprise Security

## Share MineMeld Indicators

_Added in Add-on version 6.0_

Indicators can be shared between MineMeld and Splunk Enterprise Security.  There are multiple types of indicators that can be shared:

* Domain
* File
* IPv4
* URL

Enabling indicator sharing is a two step process.  First, enable the saved searches of the indicator types to be shared.  Second, enable the corresponding threatlists in Splunk Enterprise Security.

Indicators are shared with Splunk Enterprise Security as a CSV file threatlist.  The saved searches are all set to run once every hour by default.  The Enterprise Security threatlist is set to poll every four hours by default.  So after enabling the desired indicator sharing, you may need to wait for a little time before they show up in Splunk Enterprise Security.

Here's an example walk through for enabling sharing IPv4 indicators.

#### Enable Saved Searches

Navigate to **Settings** > **Searches, reports, and alerts**.

Find the `Generate MineMeld IPv4 Enterprise Security Threatlist` saved search, then in the Actions column, click **Edit** > **Enable**.

#### Enable Enterprise Security Threatlists

Navigate to **Enterprise Security** > **Configure** > **Data Enrichment** > **Threat Intelligence Downloads**.

Find the threatlist named `minemeld_ipv4threatlist`, then click the **Enable** link.

