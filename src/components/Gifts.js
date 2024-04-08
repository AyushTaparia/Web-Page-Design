import React from "react";

const Gifts = () => {
  return (
    <>
      <div className="mt-10 w-full h-full bg-orange-50 px-[10rem] py-[2rem] flex flex-col">
        <h1 className="text-3xl">PayPal helps your gifts do more good</h1>
        <div className="grid grid-cols-3 my-10 gap-10">
          <div className="mx-auto">
            <img
              src="/images/donation.png"
              alt=""
              className="h-[8rem]"
              style={{ objectFit: "cover" }}
            />
            <h1 className="text-lg font-bold mt-4">
              Safe and secure donations
            </h1>
            <p className="mt-2 text-lg">
              Charities are in good standings so you can donate more securely.
            </p>
          </div>
          <div className="mx-auto">
            <img
              src="/images/payment.png"
              alt=""
              className="h-[8rem]"
              style={{ objectFit: "cover" }}
            />
            <h1 className="text-lg font-bold mt-4">No transaction fees</h1>
            <p className="mt-2 text-lg">
              Help charities pay less in fee and do more with your donation.
            </p>
          </div>
          <div className="mx-auto">
            <img
              src="/images/tax.png"
              alt=""
              className="h-[8rem]"
              style={{ objectFit: "cover" }}
            />
            <h1 className="text-lg font-bold mt-4">Receive a tax receipt</h1>
            <p className="mt-2 text-lg">
              A record of kindness is sent right to your email.
            </p>
          </div>
        </div>
      </div>
      <p className="px-[10rem] py-[2rem]">
        PayPal covers all transaction fees. You're donating to PayPal Giving
        Fund, a 501(c)(3) charity,
        <span className="text-blue-700 font-medium"> subject to its terms</span>
        . Donations can take{" "}
        <span className="text-blue-700 font-medium">up to 45 days</span> to get
        to your chosen charity. It's rare, but if{" "}
        <span className="text-blue-700 font-medium">
          we can't send your money to this charity
        </span>
        , we'll ask you to recommend another. If we can't reach you, we'll send
        it to a similar charity and keep you updated. Your donation is typically
        tax-deductible in the US.
        <br />
        The logos on this site and descriptions under "About this charity" are
        provided by and managed by the charities themselves.
      </p>
    </>
  );
};

export default Gifts;
