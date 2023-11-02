const iurls = [
  "8fig.io",
  "images.spr.so",
  "a.team",
  "affogata.com",
  "ai21.com",
  "aidoc.com",
  "www.alignedup.com",
  "amdocs.com",
  "animaapp.com",
  "apiiro.com",
  "appsflyer.com",
  "appwrite.io",
  "aquasec.com",
  "assets.super.so",
  "axonius.com",
  "getbalance.com",
  "bigpanda.com",
  "blinkops.com",
  "hibob.com",
  "bringg.com",
  "celery.cc",
  "chargeflow.io",
  "checkpoint.com",
  "claroty.com",
  "cloudinary.com",
  "codium.ai",
  "connecteam.com",
  "coralogix.com",
  "cyberark.com",
  "cybereason.com",
  "dagshub.com",
  "dany.ai",
  "dealhub.io",
  "deel.com",
  "deepcure.ai",
  "demoleap.com",
  "descope.com",
  "www.dig.security",
  "draftboard.com",
  "droxi.ai",
  "elementor.com",
  "eleos.health",
  "explorium.ai",
  "getfabric.com",
  "www.finaloop.com",
  "finout.io",
  "fintastic.ai",
  "firebolt.io",
  "firefly.ai",
  "fiverr.com",
  "forter.com",
  "frontegg.com",
  "fundbox.com",
  "fundguard.com",
  "www.joingelt.com",
  "global-e.com",
  "gloww.com",
  "gong.io",
  "graphiti.ai",
  "groove.ooo",
  "growthspace.com",
  "healthy.io",
  "honeybook.com",
  "immunai.com",
  "imperva.com",
  "identiq.com",
  "intail.ai",
  "jfrog.com",
  "jifiti.com",
  "khealth.com",
  "corp.kaltura.com",
  "komodor.com",
  "lightricks.com",
  "logz.io",
  "lusha.com",
  "mapme.com",
  "meliopayments.com",
  "meshpayments.com",
  "mixtiles.com",
  "monday.com",
  "montopay.com",
  "myinterview.com",
  "myquest.co",
  "navan.com",
  "navina.ai",
  "nexite.io",
  "nice.com",
  "benoblel.io",
  "nonamesecurity.com",
  "optimove.com",
  "pagaya.com",
  "paloaltonetworks.com",
  "panorays.com",
  "papayaglobal.com",
  "payem.co",
  "prettydamnquick.com",
  "peerspot.com",
  "permit.io",
  "placer.ai",
  "powtoon.com",
  "qwak.com",
  "rapyd.net",
  "www.nowreceive.com",
  "regatta.dev",
  "riskified.com",
  "heyritual.com",
  "riverside.fm",
  "rivery.io",
  "hirupert.co",
  "salt.security",
  "salto.io",
  "sentra.io",
  "silverfort.com",
  "similarweb.com",
  "sisense.com",
  "snyk.io",
  "www.stuffthatworks.health",
  "substrata.me",
  "sweep.io",
  "swimm.io",
  "talon-sec.com",
  "timeos.ai",
  "tipalti.com",
  "tolstoy.com",
  "trendemon.com",
  "trigoretail.com",
  "triplewhale.com",
  "trullion.com",
  "tufin.com",
  "unit.co",
  "verbit.ai",
  "vmware.com",
  "walkme.com",
  "walnut.io",
  "wix.com",
  "wiz.io",
  "yotpo.com",
  "zesty.co",
];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.url &&
    changeInfo.url.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i)
  ) {
    const hostname = changeInfo.url.match(
      /^https?:\/\/([^/?#]+)(?:[/?#]|$)/i
    )[1];
    if (iurls.some((url) => hostname.includes(url))) {
      console.log("true");
      const canvas = new OffscreenCanvas(16, 16);
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, 16, 16);
      context.fillStyle = "#FF0000"; // RED
      context.fillRect(0, 0, 16, 16);
      const imageData = context.getImageData(0, 0, 16, 16);
      chrome.action.setIcon({ imageData: imageData }, () => {
        /* ... */
      });
    } else {
      const canvas = new OffscreenCanvas(16, 16);
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, 16, 16);
      context.fillStyle = "#00FF00"; // Green
      context.fillRect(0, 0, 16, 16);
      const imageData = context.getImageData(0, 0, 16, 16);
      chrome.action.setIcon({ imageData: imageData }, () => {
        /* ... */
      });
      console.log("false");
    }
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  const canvas = new OffscreenCanvas(16, 16);
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, 16, 16);
  context.fillStyle = "#808080"; // Gray
  context.fillRect(0, 0, 16, 16);
  const imageData = context.getImageData(0, 0, 16, 16);
  chrome.action.setIcon({ imageData: imageData }, () => {
    /* ... */
  });
});
