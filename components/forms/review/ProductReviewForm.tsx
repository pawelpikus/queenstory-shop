import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { setLocale } from "yup";
import FormErrorMsg from "../FormErrorMsg";
import Input from "../Input";
import TextArea from "../TextArea";
import SecondaryButton from "../../buttons/SecondaryButton";
import { apolloClient } from "../../../graphql/apolloClient";
import {
  CreateProductReviewDocument,
  CreateProductReviewMutation,
  CreateProductReviewMutationVariables,
  InputMaybe,
} from "../../../generated/graphql";
import StarRating from "./StarRating/StarRating";

interface ReviewFormProps {
  productSlug: InputMaybe<string>;
}

setLocale({
  mixed: {
    required: "To pole jest wymagane",
  },
  string: {
    email: "Podaj poprawny adres email",
  },
});

const reviewFormSchema = yup
  .object({
    name: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    headline: yup.string().trim().required(),
    review: yup.string().trim().required(),
  })
  .required();

export type ReviewFormData = yup.InferType<typeof reviewFormSchema>;

const ReviewForm = ({ productSlug }: ReviewFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ReviewFormData>({
    resolver: yupResolver(reviewFormSchema),
  });

  const onSubmit: SubmitHandler<ReviewFormData> = async (data) => {
    const result = await apolloClient.mutate<
      CreateProductReviewMutation,
      CreateProductReviewMutationVariables
    >({
      mutation: CreateProductReviewDocument,
      variables: {
        review: {
          name: data.name,
          email: data.email,
          headline: data.headline,
          content: data.review,
          product: {
            connect: {
              slug: productSlug,
            },
          },
        },
      },
    });
    console.log(result);
    reset();
  };
  return (
    <>
      <div className="h-4 mb-2 text-sm text-emerald-500">
        {isSubmitSuccessful && "Formularz wysłany poprawnie"}
      </div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="w-full lg:w-1/2">
          <Input
            {...register("name")}
            labelText="Imię"
            labelFor="name"
            type="text"
          />
          {errors.name && errors.name.message && (
            <FormErrorMsg text={errors.name.message} />
          )}
        </div>

        <div className="w-full lg:w-1/2">
          <Input
            {...register("email")}
            labelText="Adres email"
            labelFor="email"
            type="email"
          />

          {errors.email && errors.email.message && (
            <FormErrorMsg text={errors.email.message} />
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <Input
            {...register("headline")}
            labelText="Nagłówek oceny"
            labelFor="headline"
            type="text"
          />
          {errors.name && errors.name.message && (
            <FormErrorMsg text={errors.name.message} />
          )}
        </div>

        <div className="w-full lg:w-1/2">
          <TextArea
            {...register("review")}
            labelText={"Zostaw komentarz"}
            labelFor={"review"}
            placeholder={"Wspaniały produkt!"}
          />
          {errors.review && errors.review.message && (
            <FormErrorMsg text={errors.review.message} />
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="block mb-1 text-sm">Na ile oceniasz ten produkt?</h3>
          <StarRating rating={0} />
        </div>
        <div className="w-full mt-4 lg:w-1/2">
          <SecondaryButton disabled={isSubmitting}>
            Wyślij ocenę
          </SecondaryButton>
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
