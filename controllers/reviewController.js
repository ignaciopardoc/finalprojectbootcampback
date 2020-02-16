const connection = require("../mysql/config.js");
const controller = {};

//JSONWEBTOKEN for authentication
const jwt = require("jsonwebtoken");
const myPrivateKey =
  "_j87sUtr*e-XJrEGNx@Fx=bqLK@GWPAP^!f@frFCR#!$TSDK3DQc9yP5p_34^ELU!Z#EeNnq9gF4sR%F9*ps+xU^Tw&3NJU5NNYtfH$62FFGPyVCK9_f9KP8%96e?qEZ83rnjKcPbwT+8WHs3H*Ck66&AUReb=gSLBKTLY*g8DYafPYaRFdG+T&P?gUTgCbFUd^t*yAvbM3Nuq!#wSDqdWwZkx5=Vg8MP3W&wJKy%Us*LXrsk2u_nmrJWXvga2nrH5cFAKh--#_z84QbH&3G8GZR$59tuPEd7LUv--xKVH*uReETN7z2YXGM2V3%3nrtgVq2KkKH!TP4bPQN!#b4E?!WzK7fbEC9tz2-W7C#6bggfRsy92b-c%Pcz+xYZCrugr*srK*qfw^EegED+nphGNF76+WB+nhbFS8Xz^Gpt$xWnEcASF+ZShxymL*=4t#QY^=?EJvDbwb-6djpV*6_nbn?XQ5@TKVtcF*X-^U4H*Z%kYY-a7wQ@paaX?R+!UjMUr%*-!^jhMh3A9V6NYa6-c=?nhF?fh9L#3kGjR3KjG3g_^=EFb48M9GZCnJ7s7B4MJzVvJqEjXR49ey!8Ss*XVp-!Bm3Hy9-Y=#93NFv&Q6XZDQ!wgf=dX!M?^WjKEZ8GKwPmx+UvxKEc4LCjY@ed#H8-9Z5K^L7#QYNMnb8DUrAC%m%a4mS$J%mGg*3V9jMj7yz5WMeHLaxp#gUF#j$%_&8K$rwk5R=YzPsh7^MtQT!M4Y%WEBdY=TgMsPxLFVm27+=_RmByq=%qa*MXPdvxbE%s#v@tvE_4&bBuRmmRAh_wD9pV2xP#uj^u@nTU8vVxAgQ6VDS-fsX?Fmf=LB$W-%!fPmR&?yJsZc++?MY8DuDJ?shU8@FF%t#yeaaDZG8h37C2QLd8-#nPZLCJu2HVtH&JxP2JrbFnLx-4KdED9^@NsdBM%^tG*%_WXXGtJG!fG5JPz3c2=tMaQajxz!YEVZ-Rf337yb3fJfBQ^NrLMbuNH6TYBJ9P5c9y!S2FMRUhtF$?HrcccMceLC?=re9?wN8u^CWsNLasQwXg&YyMEAq8bhX3xg=zRve^VwNE*98FT3e=H%%-5648kpH-pEP8@djMnu%3P=za!Q@xJQ-ypd=z#eTbcpTgtA5a8&e-naLHWeLTp8zYDcVCf@*d@+B*FB!A8J=9dP%MXG=8-XNTawBk#z*k?^Fp2u$c7UFk25L&8CT*dqU6s=G*S_MDpKCjxAjcjN-T2XRF=Uu+kT8ABmS*CH4yG6k$FmGRSxEmmnD4n3A596fXgWH+&mNuY&Y=GuX7w_SQ^bF6nG2*ePFrP#AcZqj#5V^Ts###he836#mGznGUL&DL!2^xaaWcwcjCwJ?*m@Pyq3aS#M3fnwu$2WLESsmq%C%Y2WAvG5_RuFr^sV5b**Hqun?XNy^mpXRX7XUUZYw%qBuDxp%^W&k+#&LC&k^g4CLeMzu8FfBw6x628e+taLBa-h^tu-*hu224CDEMwCPjBcPd&QbDs4ruK8EtdcNGJ?HmQTtz4A&t-rrnw=TYXCnZqs+FW@A+t5UK5tx-sDXbTY!^&*VGh_J=^5^#AApf+FMucp7sV2WRECA4^cSzK?CkZWdg2LG9fk&dNLUQ_7bmuZuD_DPBcJ=5qpsEh7wDWRRf2Avsz-5s#nAWE_22dGG35A88PcXZ-m$7U@Kb=cK+3&PCZC=q-sDPAQBfnuf*3tgL&nPUUu#Ss?!-p*-@#rYXt_KuJ%@-w!U5ye2_eZXNsqrLJ!j68CE4P8%!htcBBu#pnNFAPgx3m5mcj&Y#a_3Bv!8YzuZqQetLjsmzCkCKM9HTLD2D5947@BLPvWa2T7Hh%#rvAfzu^@x?W9a?2%4!R?7J%B%7x9qp+Vqy=gAS$BMBm&xfDg-xLd2sav3UM5WHEuEk8TPq2p#8#zEex?XpSUhjf8C53VL+Aw2stsz4XnX!Vm=Rz^_RvL!MwZxwSdrxRHw@MXGvZbQ9@Pem9w&BMv*nmngQtKxuC6V92%kY-U%Y?xfpAeY$6j3wxZhxQUzP#Y%NR^NDjRm";

controller.setReview = (req, res) => {
  const { stars, review, dog_id, business_id } = req.body;

  connection.query(
    `SELECT * FROM review WHERE dog_id = ${dog_id} AND business_id = ${business_id}`,
    (error, check) => {
      if (error) throw error;
      else if (check.length === 0) {
        connection.query(
          `INSERT INTO review (stars, ${
            review ? "review," : ""
          } dog_id, business_id) VALUES ('${stars}', ${
            review ? `'${review}', ` : ""
          } '${dog_id}', '${business_id}')`,
          (err, result) => {
            if (err) throw err;

            res.json(result);
          }
        );
      } else {
        connection.query(
          `UPDATE review SET  ${
            review ? `review='${review}',` : ""
          } reviewDate = NOW(), ${
            stars ? `stars='${stars}'` : ""
          }  WHERE dog_id = ${dog_id} AND business_id = ${business_id}`,
          (err, result) => {
            if (err) throw err;

            res.json(result);
          }
        );
      }
    }
  );
};

controller.getReviewNumber = (req, res) => {
  const { id } = req.body;

  connection.query(
    `SELECT count(*) AS reviewNumber, AVG(stars) AS averageRate FROM review WHERE business_id = ${id};`,
    (err, result) => {
      if (err) throw err;

      res.json(result[0]);
    }
  );
};

controller.getReviews = (req, res) => {
  const { businessId } = req.params;

  connection.query(
    `SELECT * FROM review WHERE business_id = ${businessId} ORDER BY reviewDate DESC`,
    (err, result) => {
      if (err) throw err;

      res.json(result);
    }
  );
};

module.exports = controller;
