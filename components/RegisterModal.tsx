"use client";
import ModalWrapper from "@/components/elements/ModalWrapper";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

interface Props {
  externalIsOpen?: boolean;
  setExternalIsOpen?: (state: boolean) => void;
  showButton?: boolean;
  buttonText?: string;
}

const RegisterModal: FC<Props> = ({
  externalIsOpen = false,
  setExternalIsOpen,
  showButton = false,
  buttonText = "Register",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {showButton && (
        <button
          className="bg-purple-500 rounded-xl text-white px-3 py-2 inline-flex justify-center items-center gap-2 flex-1"
          onClick={() => setIsOpen(true)}
        >
          {buttonText}
          <FiArrowRight />
        </button>
      )}
      <ModalWrapper
        title="Get Registered Now"
        isOpen={isOpen || externalIsOpen}
        setIsOpen={setExternalIsOpen ? setExternalIsOpen : setIsOpen}
      >
        <p>
          Message one of our verified agents on telegram for your{" "}
          <span className="text-purple-500">Phenome</span> registration
        </p>
        <Link
          href="https://t.me/earnbigonphenom"
          target="_blank"
          className="bg-purple-500 rounded-xl text-white px-3 py-2 inline-flex justify-center items-center gap-2 flex-1"
        >
          Register
          <FiExternalLink />
        </Link>
        <p>
          It is also important for you to join our verified social handles for
          more information on how{" "}
          <span className="text-purple-500">Phenom</span> works.
        </p>
        <div className="flex gap-3 justify-center mt-4 text-sm">
          <Link
            href="https://t.me/earnbigonphenom"
            className="flex flex-col items-center gap-2 flex-1 group"
          >
            <Image
              src="/telegram-logo.png"
              alt="whatsapp logo"
              height={100}
              width={100}
              className="w-8"
            />
            <p className="group-hover:text-purple-500">Telegram</p>
          </Link>
          <Link
            href="https://Wa.me/+2348104124886?text=Hello!%20Coach%20I'm%20Ready%20To%20Pay%20For%20Phenom%20Registration%20Fee.%20"
            className="flex flex-col items-center gap-2 flex-1 group"
          >
            <Image
              src="/whatsapp-logo.png"
              alt="whatsapp logo"
              height={100}
              width={100}
              className="w-8"
            />
            <p className="group-hover:text-purple-500">Whatsapp </p>
          </Link>
        </div>
      </ModalWrapper>
    </>
  );
};
export default RegisterModal;
