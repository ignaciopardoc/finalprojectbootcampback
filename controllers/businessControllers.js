const connection = require("../mysql/config.js")
const controller = {}

//Multer setup
const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: "public/avatars",
//     filename: (_req, file, cb) => {
//         const extension = file.originalname.slice(
//             file.originalname.lastIndexOf(".")
//         );
//         cb(null, new Date().valueOf() + extension); // TODO: use ID here
//     }
// });

const fileFilter = (request, _file, cb) => {
    const { authorization } = request.headers;
    if (authorization) {
        const token = authorization.replace("Bearer ", "");
        verify(token, myPrivateKey)
        cb(null, true);
    } else {
        cb(null, false);
    }
};
// const upload = multer({ storage }).single("mainImage");

//End multer setup

//JSONWEBTOKEN for authentication
const jwt = require("jsonwebtoken")
const myPrivateKey = "_j87sUtr*e-XJrEGNx@Fx=bqLK@GWPAP^!f@frFCR#!$TSDK3DQc9yP5p_34^ELU!Z#EeNnq9gF4sR%F9*ps+xU^Tw&3NJU5NNYtfH$62FFGPyVCK9_f9KP8%96e?qEZ83rnjKcPbwT+8WHs3H*Ck66&AUReb=gSLBKTLY*g8DYafPYaRFdG+T&P?gUTgCbFUd^t*yAvbM3Nuq!#wSDqdWwZkx5=Vg8MP3W&wJKy%Us*LXrsk2u_nmrJWXvga2nrH5cFAKh--#_z84QbH&3G8GZR$59tuPEd7LUv--xKVH*uReETN7z2YXGM2V3%3nrtgVq2KkKH!TP4bPQN!#b4E?!WzK7fbEC9tz2-W7C#6bggfRsy92b-c%Pcz+xYZCrugr*srK*qfw^EegED+nphGNF76+WB+nhbFS8Xz^Gpt$xWnEcASF+ZShxymL*=4t#QY^=?EJvDbwb-6djpV*6_nbn?XQ5@TKVtcF*X-^U4H*Z%kYY-a7wQ@paaX?R+!UjMUr%*-!^jhMh3A9V6NYa6-c=?nhF?fh9L#3kGjR3KjG3g_^=EFb48M9GZCnJ7s7B4MJzVvJqEjXR49ey!8Ss*XVp-!Bm3Hy9-Y=#93NFv&Q6XZDQ!wgf=dX!M?^WjKEZ8GKwPmx+UvxKEc4LCjY@ed#H8-9Z5K^L7#QYNMnb8DUrAC%m%a4mS$J%mGg*3V9jMj7yz5WMeHLaxp#gUF#j$%_&8K$rwk5R=YzPsh7^MtQT!M4Y%WEBdY=TgMsPxLFVm27+=_RmByq=%qa*MXPdvxbE%s#v@tvE_4&bBuRmmRAh_wD9pV2xP#uj^u@nTU8vVxAgQ6VDS-fsX?Fmf=LB$W-%!fPmR&?yJsZc++?MY8DuDJ?shU8@FF%t#yeaaDZG8h37C2QLd8-#nPZLCJu2HVtH&JxP2JrbFnLx-4KdED9^@NsdBM%^tG*%_WXXGtJG!fG5JPz3c2=tMaQajxz!YEVZ-Rf337yb3fJfBQ^NrLMbuNH6TYBJ9P5c9y!S2FMRUhtF$?HrcccMceLC?=re9?wN8u^CWsNLasQwXg&YyMEAq8bhX3xg=zRve^VwNE*98FT3e=H%%-5648kpH-pEP8@djMnu%3P=za!Q@xJQ-ypd=z#eTbcpTgtA5a8&e-naLHWeLTp8zYDcVCf@*d@+B*FB!A8J=9dP%MXG=8-XNTawBk#z*k?^Fp2u$c7UFk25L&8CT*dqU6s=G*S_MDpKCjxAjcjN-T2XRF=Uu+kT8ABmS*CH4yG6k$FmGRSxEmmnD4n3A596fXgWH+&mNuY&Y=GuX7w_SQ^bF6nG2*ePFrP#AcZqj#5V^Ts###he836#mGznGUL&DL!2^xaaWcwcjCwJ?*m@Pyq3aS#M3fnwu$2WLESsmq%C%Y2WAvG5_RuFr^sV5b**Hqun?XNy^mpXRX7XUUZYw%qBuDxp%^W&k+#&LC&k^g4CLeMzu8FfBw6x628e+taLBa-h^tu-*hu224CDEMwCPjBcPd&QbDs4ruK8EtdcNGJ?HmQTtz4A&t-rrnw=TYXCnZqs+FW@A+t5UK5tx-sDXbTY!^&*VGh_J=^5^#AApf+FMucp7sV2WRECA4^cSzK?CkZWdg2LG9fk&dNLUQ_7bmuZuD_DPBcJ=5qpsEh7wDWRRf2Avsz-5s#nAWE_22dGG35A88PcXZ-m$7U@Kb=cK+3&PCZC=q-sDPAQBfnuf*3tgL&nPUUu#Ss?!-p*-@#rYXt_KuJ%@-w!U5ye2_eZXNsqrLJ!j68CE4P8%!htcBBu#pnNFAPgx3m5mcj&Y#a_3Bv!8YzuZqQetLjsmzCkCKM9HTLD2D5947@BLPvWa2T7Hh%#rvAfzu^@x?W9a?2%4!R?7J%B%7x9qp+Vqy=gAS$BMBm&xfDg-xLd2sav3UM5WHEuEk8TPq2p#8#zEex?XpSUhjf8C53VL+Aw2stsz4XnX!Vm=Rz^_RvL!MwZxwSdrxRHw@MXGvZbQ9@Pem9w&BMv*nmngQtKxuC6V92%kY-U%Y?xfpAeY$6j3wxZhxQUzP#Y%NR^NDjRm"


//Eliminar Empresa por token
// controller.delete = (req, res) => {
//     let { authorization } = req.headers
//     if (authorization) {
//         const token = authorization.split(" ")[1]
//         const userId = jwt.verify(token, myPrivateKey).id
//         connection.query(`DELETE FROM business WHERE id = ${userId}`)
//         res.sendStatus(200)
//     }
// }

//Delete business
controller.deleteBusiness = (req, res) => {
    const { businessId } = req.params
    connection.query(`DELETE FROM business WHERE id = '${businessId}'`, (err, result) => {
        if (err) throw err

        res.json(result)
    })
}

//Actualizar usuario por token
controller.update = (req, res) => {
    const { password, email, businessName } = req.body
    const { authorization } = req.headers
    const token = authorization.split(" ")[1]
    const userId = jwt.decode(token).id

    connection.query(`UPDATE login SET ${password ? `password='${password}',` : ""}${email ? ` email='${email}'` : ""} WHERE id=${userId}`, (err, result) => {
        if (err) throw err

        res.sendStatus(200)
    })
}

controller.updateBusiness = (req, res) => {
    const { id, businessName,
        address,
        description,
        category,
        telephone,
        email,
        lat,
        lon,
        city,
        postcode,
        instagram } = req.body

    connection.query(`UPDATE business SET ${businessName ? `businessName='${businessName}',` : ""}${description ? `description='${description}',` : ""}${category ? `category='${category}',` : ""}${telephone ? `telephone='${telephone}',` : ""}${email ? `email='${email}',` : ""}${lat ? `lat='${lat}',` : ""}${lon ? `lon='${lon}',` : ""}${city ? `city='${city}',` : ""}${postcode ? `postcode='${postcode}',` : ""}${instagram ? `instagram='${instagram}',` : ""}${address ? ` address='${address}'` : ""} WHERE id=${id}`, (err, result) => {
        if (err) throw err

        res.sendStatus(200)
    })

}


//Insert User business
controller.insertBusiness = (req, res) => {
    let token = req.headers.authorization.replace("Bearer ", "")

    const { id } = jwt.verify(token, myPrivateKey)
    console.log(id)


    const { businessName,
        address,
        description,
        category,
        telephone,
        email,
        lat,
        lon,
        city,
        postcode,
        instagram } = req.body
    console.log(city)


    connection.query(`INSERT INTO business (businessName,
        address,
        description,
        category,
        telephone,
        email,
        lat,
        lon,
        city,
        postcode,
        instagram,
        user_id) VALUES ('${businessName}', '${address}', '${description}', '${category}', '${telephone}', '${email}', '${lat}', '${lon}', '${city}', '${postcode}', '${instagram}', '${id}');`, (error, result) => {
        if (error) throw error
        console.log(result)
        res.json(result)
    })
}

//Obtain all business asociated with the user logged
controller.getBusinessFromUser = (req, res) => {
    let token = req.headers.authorization.replace("Bearer ", "")

    const { id } = jwt.verify(token, myPrivateKey)


    connection.query(`SELECT * FROM business WHERE user_id = ${id}`, (error, result) => {
        if (error) throw error

        res.json(result)
    })
}

//Get info from one business
controller.getOneInfo = (req, res) => {
    const { id } = req.params
    console.log(id)

    connection.query(`SELECT * from business WHERE id = ${id}`, (err, result) => {
        if (err) throw err

        res.json(result[0])
    })


}

//Get all the categories from the database, returned as an array
controller.getCategories = (req, res) => {

    connection.query(`SELECT
    COLUMN_TYPE AS categoryType
 FROM
    INFORMATION_SCHEMA.COLUMNS
 WHERE
    TABLE_SCHEMA = 'doggiesintown' AND TABLE_NAME = 'business' AND COLUMN_NAME = 'category';`, (error, results) => {
        res.send(results[0].categoryType.replace("enum('", "").replace("')", "").split("','"))
    })
}

controller.setMainPhoto = (req, res) => {
    const { business_id } = req.params
    console.log(req.file.filename)
    connection.query(`UPDATE business SET mainImagePath = '${req.file.filename}' WHERE (id = '${business_id}');`, (err, result) => {
        if (err) throw err

        res.sendStatus(200)
    })
}

controller.getBusinessMap = (req, res) => {
    const { latBottom,
        latTop,
        lonLeft,
        lonRight, category } = req.body
    console.log(category)

    connection.query(`SELECT business.* FROM business LEFT JOIN login ON business.user_id = login.id WHERE (login.iban IS NULL OR login.iban = '') AND lat > ${latBottom} AND lat < ${latTop} AND lon > ${lonLeft} AND lon < ${lonRight}${category !== "null" && category ? ` AND category = '${category}'` : ""}`, (err, result) => {
        if (err) throw err

        res.json(result)
    })
}

controller.getBusinessPremium = (req, res) => {
    const { latBottom,
        latTop,
        lonLeft,
        lonRight, category } = req.body
    console.log(category)

    connection.query(`SELECT business.* FROM business LEFT JOIN login ON business.user_id = login.id WHERE login.iban<>'' AND lat > ${latBottom} AND lat < ${latTop} AND lon > ${lonLeft} AND lon < ${lonRight}${category !== "null" && category ? ` AND category = '${category}'` : ""}`, (err, result) => {
        if (err) throw err

        res.json(result)
    })
}

module.exports = controller

// 