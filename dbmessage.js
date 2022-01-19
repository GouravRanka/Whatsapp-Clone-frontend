import mongoose, { model, mongo }  from "mongoose";

const whatsupschema=mongoose.Schema(    {

    message:String,
    name:String,
    timestamp:String,

    }
)
export default mongoose.model('messagecontent',whatsupschema)