import { InferSchemaType, model, Schema } from "mongoose";

const courseSchema = new Schema({
    term: { type: String, required: true },
    type: { type: String, required: true },
    code: { type: String, required: true },
    units: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    professor: { type: String },
    section: { type: String },
    midterm: { type: String },
    final: { type: String },
    status: { type: String, required: true },
    modules: { type: Array },
});

type Course = InferSchemaType<typeof courseSchema>;

export default model<Course>("Course", courseSchema);