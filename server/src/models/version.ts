import { InferSchemaType, model, Schema } from "mongoose";

const versionSchema = new Schema({
    major: { type: Number, required: true },
    minor: { type: Number, required: true },
    patch: { type: Number, required: true },
});

type Version = InferSchemaType<typeof versionSchema>;

export default model<Version>("Version", versionSchema);