# Installation

### Download

* [Palo Alto Networks App](https://splunkbase.splunk.com/app/491)
* [Palo Alto Networks Add-on](https://splunkbase.splunk.com/app/2757)

If upgrading to App 5.0, or 6.0, please read the [Upgrade Guide](upgrade.md).

Not sure what version to download? Check the [Compatibility Guide](compatibility.md).

The Palo Alto Networks Splunk App and Add-on are designed to work together, and with Splunk Enterprise Security if available. The Add-on can be used with or without the App.

### Where to install

| Splunk Node | What to install |
| :--- | :--- |
| Search Head | Add-on and App |
| Indexer | Add-on only |
| Heavy Forwarder | Add-on only |
| Universal Forwarder | None |

Some organizations prefer not to install Add-ons on Search Heads. This is fine for log ingest, but will prevent some advanced features from functioning, such as [Adaptive Response](https://www.splunk.com/en_us/solutions/solution-areas/security-and-fraud/adaptive-response-initiative.html) and [Threat Intelligence](/threat-intelligence.md).

> #### warning::Important changes
>
> Previous guidance was to install the App and Add-on to all Search Heads, Indexers, and Heavy Forwarders. However, this can result in duplicate datamodel acceleration in some clustered configurations. The App should only be installed on Search Heads per the table above. If you have installed the App on Indexers or Heavy Forwarders, please delete the App so only the Add-on remains on those nodes.
>
> Earlier versions of the App would install the Add-on automatically. This is no longer allowed by Splunk so since App 5.4.2 you are required you to install the App and Add-on individually.

### Install the App and Add-on

Install the Palo Alto Networks App by downloading it from the App homepage, or by installing it from within Splunk.

![Downloading the App and Add-on from within Splunk Enterprise.](assets/download_app.png)

## Alternative: Install from Github

This App is available on [SplunkBase](https://splunkbase.splunk.com/app/491) and [Github](https://github.com/PaloAltoNetworks-BD/SplunkforPaloAltoNetworks). Optionally, you can clone the GitHub repository to install the App. Please feel free to submit contributions to the App using pull requests on GitHub.

App:  
From the directory `$SPLUNK_HOME/etc/apps/`, type the following command:

```
git clone https://github.com/PaloAltoNetworks/SplunkforPaloAltoNetworks.git SplunkforPaloAltoNetworks
```

Add-on:  
From the directory `$SPLUNK_HOME/etc/apps/`, type the following command:

```
git clone https://github.com/PaloAltoNetworks/Splunk_TA_paloalto.git Splunk_TA_paloalto
```



