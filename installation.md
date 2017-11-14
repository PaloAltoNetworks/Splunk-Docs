Installation
============

### Download

-   [Palo Alto Networks App](https://splunkbase.splunk.com/app/491)
-   [Palo Alto Networks Add-on](https://splunkbase.splunk.com/app/2757)

If upgrading to App 5.0, or 6.0, please read the [Upgrade Guide](upgrade.md).

Not sure what version to download? Check the [Compatibility Guide](compatibility.md).

The Palo Alto Networks Splunk App and Add-on are designed to work together, and with Splunk Enterprise Security if available. The Add-on can be used with or without the App.

### Where to install

It's recommended to install both the Palo Alto Networks App and Add-on on all Search Heads, Indexers, and Heavy Forwarders. Do not install on Universal Forwarders.

Some organizations prefer to install Add-ons only on Indexers/Heavy Forwarders, and Apps only on Search Heads. This will work for log ingest, but will prevent some advanced features from functioning, such as [Adaptive Response](https://www.splunk.com/en_us/solutions/solution-areas/security-and-fraud/adaptive-response-initiative.html).

### Install the App and Add-on

Install the Palo Alto Networks App by downloading it from the App homepage, or by installing it from within Splunk.

![Downloading the App and Add-on from within Splunk Enterprise.](assets/download_app.png)

> #### primary::Note
>
> Previous versions of the App would install the Add-on automatically. This is no longer allowed by Splunk so recent versions require you to install the App and Add-on individually.

## Alternative: Install from Github

This App is available on [SplunkBase](https://splunkbase.splunk.com/app/491) and [Github](https://github.com/PaloAltoNetworks-BD/SplunkforPaloAltoNetworks). Optionally, you can clone the GitHub repository to install the App. Please feel free to submit contributions to the App using pull requests on GitHub.

App:  
From the directory `$SPLUNK_HOME/etc/apps/`, type the following command:

    git clone https://github.com/PaloAltoNetworks/SplunkforPaloAltoNetworks.git SplunkforPaloAltoNetworks

Add-on:  
From the directory `$SPLUNK_HOME/etc/apps/`, type the following command:

    git clone https://github.com/PaloAltoNetworks/Splunk_TA_paloalto.git Splunk_TA_paloalto

