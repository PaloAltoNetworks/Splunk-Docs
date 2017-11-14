# External Search

## External Search from AutoFocus

External Search can be used with AutoFocus **Remote Search** feature. Remote search is a feature in AutoFocus providing a way to search for IOC’s in an external system. The Palo Alto Networks Splunk App can receive a search request from AutoFocus and provide log events that match the search criteria.

> #### primary::Note
>
> This feature is only available on Palo Alto Networks App and requires access to AutoFocus.

Setting up remote search and how to use it in AutoFocus is documented on the Palo Alto Networks Website and will not be covered here. The values needed in `Step 3` of the documentation are provided here along with the link to the documentation.

-   [Setup AutoFocus remote search](https://www.paloaltonetworks.com/documentation/autofocus/autofocus/autofocus_admin_guide/autofocus-search/set-up-remote-search)
-   Values to be used in Step 3 of the doc  
    System Type: `Custom`

    Address: `https://<SPLUNK SERVER>:8000/en-US/app/SplunkforPaloAltoNetworks/external_search?search=`

## External Search from Firewall and Panorama

Palo Alto Networks Firewall and Panorama have a feature called LogLink, which allows you to cross launch into an external search from the Firewall or Panorama UI. This feature can be used with the Palo Alto Networks Splunk App to search for a Firewall or Panorama log in Splunk automatically.

> #### primary::Note
>
> This feature is only available with the Palo Alto Networks App for Splunk and requires access to PAN-OS CLI for initial configuration.

Example CLI command :

    set deviceconfig system log-link Splunk.Dst url http://<SPLUNK SERVER>:8000/en-US/app/SplunkforPaloAltoNetworks/external_search?search=(dest_ip%20eq%20'{dst}')

Other possible fields to search :

    (dest_ip%20eq%20'{dst}')
    (src_ip%20eq%20'{src}')
    (dest_port%20eq%20'{dport}')
    (src_port%20eq%20'{sport}')
    (protocol%20eq%20'{proto}')

