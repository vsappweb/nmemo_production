const router = require("express").Router();
const GmTool = require("../models/GmTool");
const User = require("../models/User");

// router.get("/", (req, res) => {
//     console.log("Welcome to shift transfer page!")
// });

//create a shift transfer values and descriptions
router.post("/", async (req, res) => {
    const newGmTool = new GmTool(req.body);
    try {
        const savedGmTool = await newGmTool.save();
        res.status(201).json(savedGmTool);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// // update a shift transfer values and descriptions
// router.put("/:id", async (req, res) => {
//     try {
//         const ShiftTransferValuesAndDescs = await ShiftTransferValuesAndDesc.findById(req.params.id);
//         // if (ShiftTransferValuesAndDesc.lineId === req.body.lineId) {
//             await ShiftTransferValuesAndDescs.updateOne({ $set: req.body });
//             res.status(204).json("The shift transfer values and descriptions has been updated")
//         // } else {
//         //     res.status(403).json("You can update only your shift transfer values and descriptions");
//         // }

//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

// // delete a shift transfer
// router.delete("/:shiftTransferItemId", async (req, res) => {
//     try {
//         const ShiftTransferValuesAndDescs = await ShiftTransferValuesAndDesc.findById(req.params.shiftTransferItemId);
//         if (ShiftTransferValuesAndDescs) {
//             if (ShiftTransferValuesAndDescs.lineId == req.body.lineId) {
//                 await ShiftTransferValuesAndDescs.deleteOne();
//                 res.status(204).json("The post of shift transfer has been deleted")
//             } else {
//                 res.status(403).json("You can delete only your shift transfer");
//             }
//         } else {
//             res.status(404).json("The shift transfer values and descriptions not found");
//         }
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });


// // get user's all posts
// router.get("/profile/:personnelnumber", async (req, res) => {
//     try {
//         const user = await User.findOne({ personnelnumber: req.params.personnelnumber });
//         const ShiftTransferItems = await ShiftTransferItems.find({ lineId: user._id });
//         res.status(200).json(ShiftTransferItems);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// get all shift Transfers Values And Descriptions
router.get('/allGmTool', async (req, res) => {
    try {
        const gmTool = await GmTool.find({});
        const gmToolMap = {};
        gmTool.forEach((gmTool) => {
            gmToolMap[gmTool._id] = gmTool;
        });
        res.status(200).json(gmToolMap);
    } catch (err) {
        res.status(500).json(err)
    }
});


// get a shift transfer item
// router.get("/:id", async (req, res) => {
//     try {
//         const ShiftTransferItems = await ShiftTransferItem.findById(req.params.id);
//         res.status(200).json(ShiftTransferItems)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });


module.exports = router