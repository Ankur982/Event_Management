const router = require("express").Router();

const { verifyTokenAndAdmin, verifyToken } = require("../middleware/verifyToken");
const Event = require("../models/Event");


//routes to create event and using middleware to verify user is admin

router.post("/event", verifyTokenAndAdmin, async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.send("Event Created Successfully....!");
  } catch (err) {
    res.status(401).send(err)
  }
});


//routes to get event and using middleware to verify user

router.get("/event", verifyToken, async (req, res) => {
  try {
    const allEvents = await Event.find();

    res.status(200).send(allEvents);

  } catch (err) {
    res.status(401).send(err);
  }
});


//routes to delete event and using middleware to verify user is admin

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.deleteOne({ _id: id });
    res.send("Event Deleted Succesfilly....!");
  } catch (e) {
    res.status(404).send(e);
  }
});



//routes to update event and using middleware to verify user is admin

router.patch("/:id", verifyTokenAndAdmin, async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    price,
    teacher,
    duration,
    validity,
    imageLink,
  } = req.body;

  try {
    if (title) {
      const event = await Event.updateOne(
        { _id: id },
        { $set: { title: title } }
      );
      return res.send("Title updated....!");
    }

    if (description) {
      const event = await Event.updateOne(
        { _id: id },
        { $set: { description: description } }
      );
      return res.send("Description Updated...!");
    }

    if (price) {
      const event = await Event.updateOne(
        { _id: id },
        { $set: { price: price } }
      );
      return res.send("Price Updated....!");
    }

    if (teacher) {
      const event = await Event.updateOne(
        { _id: id },
        { $set: { teacher: teacher } }
      );
      return res.send("Teacher Updated....!");
    }

    if (duration) {
      const event = await Event.updateOne(
        { _id: id },
        { $set: { duration: duration } }
      );
      return res.send("Duration Updated....!");
    }


    if (validity) {
      const event = await Event.updateOne(
        { _id: id },
        { $set: { validity: validity } }
      );
      return res.send("Validity Updated....!");
    }


    if (imageLink) {
      const event = await Event.updateOne(
        { _id: id },
        { $set: { imageLink: imageLink } }
      );
      return res.send("ImageLink Updated...!");
    }
  } catch (e) {
    res.status(404).send(e);
  }

});





module.exports = router;