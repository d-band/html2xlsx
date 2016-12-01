const fs = require('fs');
const htmlTo = require('../lib');

htmlTo(`
<style type="text/css">
  table th, table td {
    font-size: 10px;
  }
</style>
<table cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td valign="top" style="width: 114.0px; height: 15.0px; background-color: #a3917d; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#ffffff" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255);"><b>Category</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 15.0px; background-color: #a3917d; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#ffffff" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255);"><b>Budget</b></font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 15.0px; background-color: #a3917d; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#ffffff" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255);"><b>Actual</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 15.0px; background-color: #a3917d; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#ffffff" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255);"><b>Difference</b></font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 13.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Auto</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$200.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$90.00</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$110.00</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 14.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Entertainment</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 14.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$200.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 14.0px; background-color: #f2efec; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$32.00</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 14.0px; background-color: #f2efec; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$168.00</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 13.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Food</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$350.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$205.75</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$144.25</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 13.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Home</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$300.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 13.0px; background-color: #f2efec; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$250.00</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; background-color: #f2efec; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$50.00</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 13.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Medical</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$100.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$35.00</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$65.00</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 14.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Personal Items</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 14.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$300.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 14.0px; background-color: #f2efec; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$80.00</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 14.0px; background-color: #f2efec; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$220.00</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 13.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Travel</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$500.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$350.00</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$150.00</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 13.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Utilities</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$200.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 13.0px; background-color: #f2efec; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$100.00</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; background-color: #f2efec; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$100.00</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 14.0px; background-color: #e5e2df; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p style="margin-bottom: 0px;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Other</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 14.0px; background-color: #ffe380; background-color: rgba(255, 227, 128, 0.25); border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$50.00</font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 14.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">$60.00</font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 14.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);">($10.00)</font></p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="width: 114.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>Total</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>$2,200.00</b></font></p>
      </td>
      <td valign="top" style="width: 117.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>$1,202.75</b></font></p>
      </td>
      <td valign="top" style="width: 118.0px; height: 13.0px; border-style: solid; border-width: 1.0px 1.0px 1.0px 1.0px; border-color: #7f6b54 #7f6b54 #7f6b54 #7f6b54; padding: 4.0px 4.0px 4.0px 4.0px">
        <p align="right" style="margin-bottom: 0px; text-align: right;"><font face="Avenir Next" color="#594b3b" style="font-variant-numeric: normal; font-stretch: normal; font-size: 10px; line-height: normal; font-family: &quot;Avenir Next&quot;; font-kerning: none; font-variant-ligatures: common-ligatures; color: rgb(89, 75, 59); -webkit-text-stroke-color: rgb(89, 75, 59);"><b>$997.25</b></font></p>
      </td>
    </tr>
  </tbody>
</table>
`, (err, file) => {
  file.saveAs()
    .pipe(fs.createWriteStream(__dirname + '/complex.xlsx'))
    .on('finish', () => console.log('Done.'));
});