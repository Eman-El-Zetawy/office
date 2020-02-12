
**************************

  Welcome to ActiveTeach

**************************

Installing the product

ActiveTeach is delivered with an autorun launcher; from this launcher the ActiveTeach can either be launched directly from the CD, or else installed to your computer.

Before either installing or launching this product, please verify that you have the minimum software and hardware as detailed below.


  To install the product to your computer, please follow these steps:
===============================================================+====

 1) Insert the Disc in your computer's CD-ROM drive.

 2) ActiveTeach launcher should autostart. (This may take up to 20 seconds.)

 3) Choose the appropriate installation option and follow the on-screen instructions. Note that ActiveBook will install as a component of ActiveTeach if relevant.


If ActiveTeach launcher fails to autostart, follow these instructions:

 1) Insert the Disc in your computer's CD-ROM drive.

 2) Open 'My Computer'

 3) Right-click on the 'ActiveTeach' CD icon and choose 'Explore'.

 4) Double-click on the file Setup.exe for the ActiveTeach installer.

 5) Choose the appropriate installation options and follow the on-screen instructions.


Note:
 If installing as part of an existing product range installation, be sure to select default install destinations to ensure  products are easily integrated.



 To install the product to a network, please follow these steps:
===================================================================

Note: Server-based installations of ActiveTeach must reside on a mapped network drive.

 1) Whilst at the server, create a shared location; ensure that your users are given appropriate read/write privileges to the  shared folder, then ensure that the share is mapped to the relevant workstations (and/or login profiles).

 2) Install the ActiveTeach title to this shared folder.

 3) Place the shortcuts from the server Start Menu into the installation directory.

 4) From a workstation, access the shared folder through the mapped network drive (e.g. P:\Network Programs\Installed  folder\)

 5) With the folder open, right-click on the ActiveTeach (or ActiveBook) shortcuts and click Properties.

 6) Ensure that the path to the wrapper.exe is corrected according to the drive mapping. Pay particular attention to any switch options which are preceded by the launch path.

 7) Provided that all relevant workstations map the shared drive as the same drive letter, you can paste this shortcut into  your chosen distribution system.

Refer to your specific server documentation for specific automated distribution mechanisms – i.e. ActiveDirectory, SMS, WinSuite etc.



******************************************************************

 Minimum software and hardware requirements -- standalone computer

******************************************************************

Hardware

The following hardware is the minimum required for the PC you use to work on this product:

  •	IBM® compatible PC 
  •	Pentium® 3 1GHz processor or equivalent 
  •	512 MB RAM
  •	Sound card and speakers
  •	CD-ROM drive x8
  •	1024 x 768 screen resolution.

Before installing the product, please ensure that you have a minimum of 2 GB (or 10% of the total capacity) disk space free on the installation hard drive. Insufficient disc space will compromise performance.



Software

The following software is the minimum required for the PC you use to work on the product:

  •	Windows® XP (Professional or Home) Service Pack 2 or later
  •	Adobe Reader (7 or later– available for free from www.adobe.com)
  •	Adobe Flash Player (9 or later– available for free from www.adobe.com)



* Pearson makes no representations for the availability or suitability of third-party software.


******************************************************************

 Minimum software and hardware requirements -- server installation

******************************************************************

Hardware

The following is the minimum required for PC installation:
  •	2 GB free space on hard disk

Software

The following software is the minimum required for the server you use to run the site licence edition of ActiveTeach:
  •	Windows® 2003 Server sp2.

Note that Windows NT® Server and Windows 2000 Server are no longer maintained by Microsoft and cannot be supported.



******************************************************************

 RM CC3 network installation

******************************************************************

Prerequisites:

 1. Office 2000 or later.
 2. Adobe Reader 7 or later.
 3. Flash Player 8 or later.
_________________________________________________________

You may choose to distribute this product as follows:

 a) both the student version ActiveBook and the teacher version ActiveTeach

		or

 b) the student version ActiveBook only (to reduce the installation footprint)

Note - the application mode is determined by the launch shortcut, follow the relevant instructions below.
_________________________________________________________

a) To distribute both ActiveTeach and ActiveBook applications:

*********************************************************************

 1. At the server, insert the disc.

 2. Cancel the Launcher.

 3. Click Start, then Run.

 4. Enter the text CMD, then press return to open a command prompt.

 5. Type e:\ (where e: is the drive that contains the CD) and then press return to switch the active drive to the CD.

 6. Perform an administrative install of the ActiveTeach to the server by typing the following text (one line):

  msiexec /a "OCR GCSE His B MWH AT.msi" TARGETDIR="D:\RMNetwork\RMManage\Packages\Applications\OCR GCSE History B MWH\v1.0.0.0\"

 7. Although this may take some time, ensure that the installation has finished by checking that the msiexec process is no longer running in Task Manager.

 8. From the disc, within the '\CC3\' folder copy the 'OCR GCSE History B MWH.ini' file into 'D:\RMNetwork\RMManage\Packages\Applications\OCR GCSE History B MWH\v1.0.0.0\'

 9. In 'D:\RMNetwork\RMManage\Packages\Applications\OCR GCSE History B MWH\v1.0.0.0\' create the following folder Structure '\shortcuts\OCR GCSE History B MWH\'

10. Copy the shortcuts 'OCR GCSE History B MWH ActiveBook' and 'OCR GCSE History B MWH' (provided on the disc in the '\CC3\Shortcuts\' folder) into 'D:\RMNetwork\RMManage\Packages\Applications\OCR History B MWH\v1.0.0.0\shortcuts\OCR GCSE History B MWH\'

11. Assign the package to the required stations and add the shortcuts according to the appropriate user program sets.


 b) To distribute just the ActiveBook application:
*********************************************************************
 
 1. At the server, insert the disc.

 2. Cancel the Launcher.

 3. Click Start, then Run.

 4. Enter the text CMD, then press return to open a command prompt.

 5. Type e:\ (where e: is the drive that contains the CD) and then press return to switch the active drive to the CD.

 6. Perform an administrative install of the ActiveBook to the server by typing the following text (one line):

  msiexec /a "OCR GCSE His B MWH ActiveBook.msi" TARGETDIR="D:\RMNetwork\RMManage\Packages\Applications\OCR GCSE History B MWH ActiveBook\v1.0.0.0\"

 7. Although this may take some time, ensure that the installation has finished by checking that the msiexec process is no longer running in Task Manager.

 8. From the disc, within the '\CC3\' folder copy the 'OCR GCSE History B MWH ActiveBook.ini' file into 'D:\RMNetwork\RMManage\Packages\Applications\OCR GCSE History B MWH ActiveBook\v1.0.0.0\'

 9. In 'D:\RMNetwork\RMManage\Packages\Applications\OCR GCSE History B MWH ActiveBook\v1.0.0.0\' create the following folder Structure '\shortcuts\OCR GCSE History B MWH ActiveBook\'

10. Copy the shortcut 'OCR GCSE History B MWH ActiveBook' (provided on the disc in the '\CC3\Shortcuts\' folder) into 'D:\RMNetwork\RMManage\Packages\Applications\OCR GCSE History B MWH ActiveBook\v1.0.0.0\shortcuts\OCR GCSE History B MWH ActiveBook\'

11. Assign the package to the required stations and add the shortcuts according to the appropriate user program sets.



 To deploy the package:
*********************************************************************
 1. Go to the RM Resource Manager.
 2. Right-click on 'Main Site'.
 3. Choose 'Update package list'.
 4. Select a workstation and edit properties.
 5. Add the package to the workstation.


Note:
Depending on your workstation security configuration, you may need to run the installed title (when logged in as System Administrator) alongside ACL DETECTIVE. This will be indicated by proper functioning when logged in as System Administrator, but impaired, or non-functioning operation when logged in as a pupil.
In this instance, you will need to identify specific areas of the hard disc, that require 'unlocking' for all users:

Distribute the package (and any prerequisites) to a clean workstation and log in as System admin. After running ACL Detective whilst exploring your ActiveTeach, you should find a file named 'WriteAccess.ini' placed alongside the appropriate MSI file on the server. Edit this ini file with Notepad, and ensure that the appropriate file system areas are tagged for 'Everyone=0x1301BF'.

After making changes to your WriteAccess.ini file, you must run the RMGPOUpdateUtility.exe from the server.




******************************************************************

 VLE packs

******************************************************************


In order to access the VLE pack(s) which accompany this Active Teach product, please go to the following website: 

http://vlepacks.pearson.com

The files are available for download packed as Zip files.  Large products will be split into a number of files.  

You will need to download all of these, ready for uploading to your VLE by your network administrator.

Simple network administrator instructions for upload are also available with the files.

In order to gain access to the files you will need to be a registered user. 
New users should register their email address and create a unique password for themselves via the website. 

If you are already a registered user, you will need to enter your email address, password and a validation code in order to access the VLE pack(s) specific to this product. 

The validation code for this product is:  vle0435510213




******************************************************************

 Technical support

******************************************************************


If you have technical problems which you cannot resolve through the Help section, visit the following address for articles which may help resolve your issues:

  http://centraal.uk.knowledgebox.com/kbase/  

If you cannot find information which helps you to resolve your particular issue, please email:

digital.support@pearson.com

Please include the following information in your mail:
- Your name and daytime telephone number.
- ISBN of the product (found on the packaging.)
- Details of the problem you are experiencing - e.g. how to reproduce  the problem, any error messages etc.
- Details of your computer (operating system, RAM, processor type and speed if known.)

If you are unable to email the support address, please telephone customer support during office hours on 0845 3138888 for general queries and technical support escalation. 

When you call, please ensure that:
You are able to reproduce the fault whilst on the telephone, that you have the original disc available and that you have sufficient time to spend in extended troubleshooting. Whilst rare, some calls have exceeded one hour in length to fully resolve. 

If you feel that you would like us to call you at a specific time or day, please email the address above stating your preferred time and an available telephone number.


******************************************************************

 Late-breaking information

******************************************************************

There is no late information for this product.




NOTE
Although every effort has been made to ensure that this CD is free from viruses and other malicious software, you should always follow safe working practices and satisfy yourself that a disc is safe before use.

Pearson Education cannot accept responsibility for losses incurred as a result of using this product, whether consequential or otherwise.



PEARSON EDUCATION LIMITED
Edinburgh Gate
Harlow
Essex
CM20 2JE
England

[www.longman.co.uk]

DPMs - CHANGE URL ABOVE AS FOLLOWS:

OCR titles - http://www.heinemann.co.uk 
Edexcel titles - http://www.pearsonschoolsandfecolleges.co.uk 
All other Secondary and Vocational titles - http://www.pearsonschoolsandfecolleges.co.uk 




All rights reserved; no part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means, electronic, mechanical, photocopying, recording, or otherwise without either the prior written permission of the Publishers or a licence permitting restricted copying in the United Kingdom issued by the Copyright Licensing Agency Ltd, 90 Tottenham Court Road, London, W1P 9HE



