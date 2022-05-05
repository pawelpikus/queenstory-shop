import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { setLocale } from "yup";
import FormErrorMsg from "../FormErrorMsg";
import Input from "../Input";
import TextArea from "../TextArea";
import SecondaryButton from "../../buttons/SecondaryButton";
import {
  CreateProductReviewDocument,
  GetReviewsForProductSlugDocument,
  InputMaybe,
  useCreateProductReviewMutation,
} from "../../../generated/graphql";
import StarRating from "./StarRating/StarRating";

interface ReviewFormProps {
  productSlug: InputMaybe<string>;
}

setLocale({
  mixed: {
    required: "To pole jest wymagane",
    notType: "Zaznacz przynajmniej jedną gwiazdkę.",
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
    rating: yup.number().required(),
  })
  .required();

export type ReviewFormData = yup.InferType<typeof reviewFormSchema>;

const ReviewForm = ({ productSlug }: ReviewFormProps) => {
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ReviewFormData>({
    resolver: yupResolver(reviewFormSchema),
  });

  const [createReview, { loading }] = useCreateProductReviewMutation({
    refetchQueries: [
      {
        query: GetReviewsForProductSlugDocument,
        variables: { slug: productSlug },
      },
    ],
  });

  const onSubmit: SubmitHandler<ReviewFormData> = async (data) => {
    createReview({
      mutation: CreateProductReviewDocument,
      variables: {
        review: {
          name: data.name,
          email: data.email,
          headline: data.headline,
          content: data.review,
          rating: data.rating,
          product: {
            connect: {
              slug: productSlug,
            },
          },
        },
      },
    });

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
        className="flex flex-col w-full gap-4"
      >
        <Input
          {...register("name")}
          labelText="Imię"
          labelFor="name"
          type="text"
        />
        {errors.name && errors.name.message && (
          <FormErrorMsg text={errors.name.message} />
        )}
        <Input
          {...register("email")}
          labelText="Adres email"
          labelFor="email"
          type="email"
        />
        {errors.email && errors.email.message && (
          <FormErrorMsg text={errors.email.message} />
        )}
        <Input
          {...register("headline")}
          labelText="Nagłówek oceny"
          labelFor="headline"
          type="text"
        />
        {errors.name && errors.name.message && (
          <FormErrorMsg text={errors.name.message} />
        )}
        <TextArea
          {...register("review")}
          labelText={"Zostaw komentarz"}
          labelFor={"review"}
          placeholder={"Wspaniały produkt!"}
        />
        {errors.review && errors.review.message && (
          <FormErrorMsg text={errors.review.message} />
        )}
        <h3 className="block mb-1 text-sm">Na ile oceniasz ten produkt?</h3>
        <StarRating {...register("rating")} setValue={setValue} />
        {errors.rating && errors.rating.message && (
          <FormErrorMsg text={errors.rating.message} />
        )}
        <div className="w-full mt-4 lg:w-1/2">
          <SecondaryButton disabled={isSubmitting && loading}>
            Wyślij ocenę
          </SecondaryButton>
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
