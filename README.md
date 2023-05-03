# CheckPrice Unisat

## Overview

This user script for Tampermonkey allows you to regularly check the price of a BRC-20 cryptocurrency on the Unisat platform and display an alert if the price drops below a certain amount.

## Installation

1. Install the Tampermonkey extension for your preferred browser (Firefox, Chrome, Edge, Opera, Safari, etc.)
2. Click on the Tampermonkey icon in your browser and select "Create a new script"
3. Copy the code from the `script.js` file into the newly created script
4. Save the script by pressing "Ctrl+S" or by clicking on "File > Save"

## Usage

1. Go to the Unisat platform page that corresponds to the cryptocurrency you want to monitor
2. Check that the page URL contains the `tick` argument with the name of the cryptocurrency in question (e.g. `https://unisat.io/market?tick=Oshi&tab=1`)
3. If not, modify the URL to include the `tick` argument with the name of the cryptocurrency (e.g. `https://unisat.io/market?tick=Oshi&tab=1`)
4. Activate the script by clicking on the Tampermonkey icon in your browser and selecting the `checkPrice Unisat` script
5. Let the script run in the background
6. If the price of the cryptocurrency drops below $35, a sound and visual alert will be displayed to inform you.

## Configuration

The $35 amount can be modified by changing the value of `targetPrice` in the script code. The delay between each price check can be modified by changing the value of `setInterval` at the end of the script (expressed in milliseconds).

**Note:** This script uses an experimental feature to automatically play sounds. If you have issues playing the sound, you can enable automatic sound playback in your browser settings or click the "Enable sound" button that will appear when the script attempts to play a sound.
