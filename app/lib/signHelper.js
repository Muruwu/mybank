var os = require('os');
if (os.platform() == 'win32') {  
    var chilkat = require('chilkat_node6_win32'); 
} else if (os.platform() == 'linux') {
    if (os.arch() == 'arm') {
        var chilkat = require('chilkat_node6_arm');
    } else if (os.arch() == 'x86') {
        var chilkat = require('chilkat_node6_linux32');
    } else {
        var chilkat = require('chilkat_node6_linux64');
    }
} else if (os.platform() == 'darwin') {
    var chilkat = require('chilkat_node6_macosx');
}

function chilkatExample() {

    var crypt = new chilkat.Crypt2();

    //  Any string argument automatically begins the 30-day trial.
    var success = crypt.UnlockComponent("30-day trial");
    if (success !== true) {
        console.log(crypt.LastErrorText);
        return;
    }

    var certStore = new chilkat.CertStore();

    //  Load a PFX file into a certificate store object.
    success = certStore.LoadPfxFile("../../config/yinqizhiliantest.pfx","mayibank");
    if (success !== true) {
        console.log(certStore.LastErrorText);
        return;
    }

    // cert: Cert
    var cert;

    //  Get the certificate by subject common name.
    //  This should be the cert within the PFX that also
    //  has a private key (also stored within the PFX).
    cert = certStore.FindCertBySubjectCN("myCert");
    if (cert == null ) {
        console.log(certStore.LastErrorText);
        return;
    }

    //  Tell the crypt object to use the certificate for signing:
    success = crypt.SetSigningCert(cert);

    //  Sign a file, producing a .p7m as output.
    //  The input file is unchanged, the test.p7m contains the
    //  contents of the input file and the signature.
    var inFile = "./str.txt";
    var outFile = "./testp7m";
    success = crypt.CreateP7M(inFile,outFile);
    if (success !== true) {
        console.log('failed: ' + crypt.LastErrorText);
        return;
    }

    console.log("Success!");

}

chilkatExample();