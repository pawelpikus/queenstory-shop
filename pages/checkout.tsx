import PrimaryButton from "../components/buttons/PrimaryButton";
import Input from "../components/forms/Input";
import TextArea from "../components/forms/TextArea";

interface formData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postCode: string;
  notes: string;
}

const CheckoutPage = () => {
  return (
    <div className="grid w-11/12 grid-cols-1 mx-auto my-8 lg:grid-cols-2">
      <form className="justify-center w-full mx-auto">
        <div className="space-x-0 lg:flex lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <Input labelText="Imię" labelFor="firstName" type="text" />
          </div>
          <div className="w-full lg:w-1/2">
            <Input labelText="Nazwisko" labelFor="lastName" type="text" />
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full">
            <Input labelText="Adres email" labelFor="email" type="email" />
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full">
            <TextArea
              labelText={"Adres"}
              labelFor={"address"}
              placeholder={"Ulica, numer domu, numer mieszkania"}
            />
          </div>
        </div>
        <div className="space-x-0 lg:flex lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <Input labelText={"Miasto"} labelFor={"city"} type={"text"} />
          </div>
          <div className="w-full lg:w-1/2 ">
            <Input
              labelText={"Kod pocztowy"}
              labelFor={"postCode"}
              type={"text"}
            />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label className="flex items-center text-sm group text-heading">
            <input
              type="checkbox"
              className="w-5 h-5 border border-neutral-500 focus:outline-none focus:ring-2"
            />
            <span className="ml-2">Save this information for next time</span>
          </label>
        </div>
        <div className="relative pt-3 xl:pt-6">
          <TextArea
            labelText={"Wiadomość (opcjonalnie)"}
            labelFor={"notes"}
            placeholder={"Wiadomość do sprzedawcy"}
          />
        </div>
        <div className="mt-4">
          <PrimaryButton>Płacę</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
