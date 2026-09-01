---
title: 'How to connect Binance to Nabu: a step-by-step guide'
description: >-
  Connect your Binance account to Nabu by creating an API key with the right
  permissions, symbol whitelist, and IP restrictions, then linking it in Nabu
  settings.
---

# How to connect Binance to Nabu: a step-by-step guide

## Step 1: Start the connection in Nabu

1\. Go to [app.nabu.pro](https://app.nabu.pro/) and click on the cogwheel next to your username.

<figure><img src="../../assets/images/hyperliquid-step-1-cogwheel.png" alt="Nabu header with the settings cogwheel next to the username" width="442"></figure>

2\. Proceed to **Link Accounts**, and select **Binance**.

<figure><img src="../../assets/images/binance-step-2-link-accounts.png" alt="Nabu Link Accounts screen with Binance selected" width="624"></figure>

## Step 2: Create your API Key on Binance

3\. Head to [binance.com/en/my/settings/api-management](https://www.binance.com/en/my/settings/api-management) and click on **Create API** to create your API Key.

<figure><img src="../../assets/images/binance-step-3-create-api.png" alt="Binance Create API button" width="624"></figure>

4\. Once the API is created, save the API key and Secret and click on **Edit Restrictions**.

5\. First, in the **IP access restrictions** field select **Restrict access to trusted IPs only (Recommended)** and use all of the IP addresses indicated below:

- `103.54.18.179`
- `103.54.18.213`
- `103.54.18.215`
- `103.54.18.217`
- `95.81.98.23`
- `95.81.96.47`
- `89.150.59.65`
- `95.81.100.99`
- `95.81.103.9`

<figure><img src="../../assets/images/binance-step-6-ip-restrictions.png" alt="Binance IP access restrictions field" width="624"></figure>

6\. For futures and spot, make sure that the following fields are ticked: **Enable Futures** and **Enable Spot & Margin & Stock Trading**.

<figure><img src="../../assets/images/binance-step-4-permissions.png" alt="Binance API permission checkboxes for futures and spot" width="624"></figure>

Note: for Futures make sure that you have your account set up and available funds.

<figure><img src="../../assets/images/binance-step-4-futures-note.png" alt="Binance futures account setup notice" width="466"></figure>

7\. Tick the **Enable Symbol Whitelist** field and ensure to add assets that you would like to whitelist for trading purposes.

<figure><img src="../../assets/images/binance-step-5-whitelist.png" alt="Binance Enable Symbol Whitelist settings" width="496"></figure>

8\. Once completed, save the changes and head back to [app.nabu.pro](https://app.nabu.pro).

## Step 3: Nabu exchange settings

9\. Head back to the settings and enter your API Key and API Secret for Binance.

<figure><img src="../../assets/images/binance-step-8-api-keys.png" alt="Nabu settings fields for Binance API Key and API Secret" width="624"></figure>
