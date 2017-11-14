# Upgrade to App/Add-on Version 6.0

**No action is required** to upgrade App 5.x or Add-on 3.x to App/Add-on 6.0. All configuration will be migrated to 6.0 and all logs prior to the upgrade will still be available. If you have made customizations to the App or Add-on such as creating your own dashboards, then please consider the following significant changes in App/Add-on 6.0.

### Dashboard changes

Most dashboards have been changed, so if you have customized one of the stock dashboards, you may need to restore your customizations after the upgrade onto the new dashboards. All dashboards within the App can be found at:

`http(s)://your-splunk-server:8000/app/SplunkforPaloAltoNetworks/dashboards`

### Firewall/Panorama credential changes

In previous versions, the firewall credential was added with a username and password separate from other credentials such as WildFire API key.

In 6.0, credentials are used for Firewall/Panorama, Aperture, and MineMeld, so there is a new credential store where you can store credentials for each purpose. Aperture and MineMeld credentials are leveraged in an Aperture or MineMeld modular input.

Firewall/Panorama credentials are now designated as whichever credential has the name "Firewall"

![The credentials name "Firewall" will be used for connection to Firewalls or Panorama](/assets/firewall-credentials.png)

### Datamodel changes

The datamodel has been optimized for size and speed efficiency and updated for the latest CIM compliance. This means removing uncommonly used fields and renaming other fields. These changes do not affect the search-time fields, only the datamodel fields.

__The following datamodel fields have changed in App 6.0:__

| Old Field | New Field |
| :--- | :--- |
| cmd, serial, virtual_system, rule_name, tag, bytes, packets, src, dest, src_class, dest_class, dvc, misc, major_content_type, protocol, app: capable of file transfer, app: evasive, app: excessive bandwidth, app: has known vulnerability, app: pervasive use, app: prone to misuse, app: tunnels other apps, app: used by malware | [removed] |
| file_digest | file_hash |
| filename | file_name |
| filetype | file_type |
| dest_hostname | dest_name |
| category for threat logs | threat_category |
| category for url logs | http_category |
| category for wildfire logs | verdict |
| dvc_host for firewall logs | dvc_name |

# Upgrade to App Version 5.0

This applies only if upgrading from a pre-5.0 version of this App to 5.0.0 or higher.

Most upgrades don't require any special action so you can just upgrade like any other Splunk app. For upgrades to 5.0.0 or higher from a pre-5.0 version, there are some actions needed to migrate to the new version.

### Add-on (TA)

Starting with App v5.0.0, the App now requires the [Palo Alto Networks Add-on for Splunk](https://splunkbase.splunk.com/app/2757). The required version of the TA is always listed in the [README.md](https://github.com/PaloAltoNetworks-BD/SplunkforPaloAltoNetworks/blob/master/README.md) file in the Palo Alto Networks App.

**ACTION REQUIRED**: You must remove the deprecated TA if it exists, called TA\_paloalto. This usually applies if you use Splunk Enterprise Security version 3.x because it comes with TA\_paloalto. Recreate any inputs from the old TA in the new TA using the instructions in the [Getting Started](/firewalls-panorama-and-traps.md) guide. Check the **apps** directory in Splunk and take the necessary action according to the table:

| Existing TA | Action Needed |
| --- | --- |
| TA_paloalto | Delete this TA directory, recreate data inputs in new TA |
| Splunk_TA_paloalto | No action required, TA is upgraded automatically by App |
| No TA installed | No action required, TA is installed automatically by App |

### Index

The new App 5.0 and Add-on 3.5 do not use the `pan_logs` index that previous versions used. Now, logs can be stored in any index. Since the App no longer specifies the pan\_logs index, if you are upgrading, you will need to specify the index yourself.

**ACTION REQUIRED**: Create a new index called `pan_logs` using the Splunk GUI or on the command line. Also, in your Splunk role settings, add the `pan_logs` index to the list of **Indexes searched by default**.

Splunk will not overwrite the data previously indexed, and you will have access to all the data indexed before the upgrade. Logs will continue to be stored in the `pan_logs` index according to the data inputs from the previous App version, unless otherwise specified. The data input can optionally be changed to store logs in a different index.

Results still might not show up during a search. This is because the `pan_logs` index is not searched by default. To add the `pan_logs` index to the list of indexes searched by default, in your Splunk settings, navigate to **Access controls** -> **Roles** -> **<your role>**. Scroll down to the section **Indexes searched by default**. Move `pan_logs` (or `All non-internal indexes`) to the right column.

### Lookups

The lookups have been moved to the Add-on (TA). However, Splunk Enterprise does not remove lookup tables during the upgrade process. So you must remove the lookup tables from the App after the upgrade, or you will see errors while searching within the App.

**ACTION REQUIRED**: Delete any lookups in the App that you did not create. If you did not create any lookups in the App directory, then you can safely delete the entire lookup directory from the App. The path to the lookup directory is `$SPLUNK_HOME/etc/apps/SplunkforPaloAltoNetworks/lookups`

For example:

    rm -rf $SPLUNK_HOME/etc/apps/SplunkforPaloAltoNetworks/lookups

### Sourcetype

The sourcetype format has changed:

| Old sourcetype | New sourcetype |
| --- | --- |
| pan_log | pan:log |
| pan_traffic | pan:traffic |
| pan_threat | pan:threat |
| pan_config | pan:config |
| pan_system | pan:system |

No action is required. The old sourcetypes will be interpreted as the new sourcetype automatically. Optionally the data input can be changed to store logs with the sourcetype `pan:log` instead of `pan_log`. This is more correct, but will not change the way logs are retrieved from the index.

> #### primary::Note
>
> The data input should only specify pan:log or pan_log for the sourcetype. The logs are automatically parsed into the other sourcetypes (pan_traffic, pan_threat, etc) by the Add-on, so they should not be referenced in the data input.



