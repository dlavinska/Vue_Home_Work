import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup
    .string()
    .required("*Title is required")
    .max(14, "Title must be 14 characters or less"),
  description: yup.string().required("*Description is required"),
  status: yup.string().required("*Status is required"),
});
