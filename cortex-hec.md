# Cortex Data Lake via HTTP Event Collector(HEC)

Send Cortex Data Lake logs to Splunk Cloud and Splunk Enterprise with HTTP Event Collector(HEC). 

## Create Event Collector Token in Splunk for Cortex Data Lake

Follow the guide for creating an Event Collector Token in Splunk:
[https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector)

Use these values when creating the token:

![](/assets/hec-input-settings.png)

Be sure to save your token value. You will need it when configuring HTTP forwarding from Cortex Data Lake.

![](/assets/hec-token-value.png)

## Setup HTTP forwarding from Cortex Data Lake

Use the instruction in the **Forward Logs from Cortex Data Lake to an HTTPS Server** guide:

[https://docs.paloaltonetworks.com/cortex/cortex-data-lake/cortex-data-lake-getting-started/get-started-with-log-forwarding-app/forward-logs-to-an-https-server](https://docs.paloaltonetworks.com/cortex/cortex-data-lake/cortex-data-lake-getting-started/get-started-with-log-forwarding-app/forward-logs-to-an-https-server)