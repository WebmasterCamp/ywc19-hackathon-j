'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";

export default function Login() {

  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [passcode, setPasscode] = useState('');
  const [otp, setOtp] = useState('');
  const [donePhoneNumber, setDonePhoneNumber] = useState(false);
  const [havePhoneNumber, setHavePhoneNumber] = useState(false);
  const [otpDone, setOtpDone] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [showErrorText, setShowErrorText] = useState(false);

  useEffect(() => {
    setShowErrorText(false);
  }, [phoneNumber,passcode,otp]);
  
  function checkPhone() {
    console.log(phoneNumber)
    if (phoneNumber.length != 10) {
      setErrorText('wrong phone number');
      setShowErrorText(true);
    } else {
      // TODO: add check phone number api
      if (phoneNumber == '1111111111') {
        setDonePhoneNumber(true);
        setHavePhoneNumber(true);
      } else {
        setDonePhoneNumber(true);
        setHavePhoneNumber(false);
      }
    }
  }

  function login() {
    console.log(passcode)
    if (phoneNumber == '1111111111' && passcode == '111111') {
      // TODO: navigate to lotto page
    } else {
      setErrorText('wrong phone number or passcode');
      setShowErrorText(true);
    }
  }

  function checkOtp() {
    console.log(otp)
    // TODO: add checkOtp api
    if (otp == '111111') {
      setOtpDone(true);
    } else {
      setErrorText('wrong otp');
      setShowErrorText(true);
    }
  }

  function addPassword() {
    console.log(passcode)
    if (passcode.length != 6) {
      setErrorText('Length passcode should be 6');
      setShowErrorText(true);
    }
    else {
      // TODO: add add Password api

      // TODO: navigate to form page
      router.push('/form');
    }

  }
  
  if (!donePhoneNumber || havePhoneNumber) {
    return (
      <div>
        <p>Phone Number</p>
        <div className=" flex flex-row gap-4">
          <Input value={phoneNumber} type="tel" maxLength={10} onChange={(e) => { setPhoneNumber(e.target.value) }} />
          {!havePhoneNumber ? <Button className="w-24" onClick={checkPhone}>ถัดไป</Button> : null}
        </div>
        {!havePhoneNumber && showErrorText ? <p className=" text-red-600">{errorText}</p> : null}
        {
          havePhoneNumber ?
            <>
              <p>6 Digits Passcode</p>
              <div className=" flex flex-col gap-4 items-center">
                <Input value={passcode} type="password" maxLength={6} onChange={(e) => { setPasscode(e.target.value) }} />
                {showErrorText ? <p className=" text-red-600">{errorText}</p> : null}
                <Button className="w-24" onClick={login}> เข้าสู่ระบบ </Button>
              </div>
            </>
            : null
        }
      </div>
    )
  }
  else {
    // TODO: change to pininput
    if (!otpDone) {
      return (
        <div>
          <p>Otp</p>
          <div className=" flex flex-col gap-4 items-center">
            <Input value={otp} type="number" maxLength={6} onChange={(e) => { setOtp(e.target.value) }} />
            {showErrorText ? <p className=" text-red-600">{errorText}</p> : null}
            <Button className="w-24" onClick={checkOtp}>ตรวจสอบ otp</Button>
          </div>
        </div>
      )
    }
    // TODO: change to pininput
    else {
      return (
        <div>
          <p>Set 6 Digits Passcode</p>
          <div className=" flex flex-col gap-4 items-center">
            <Input value={passcode} type="password" maxLength={6} onChange={(e) => { setPasscode(e.target.value) }} />
            {showErrorText ? <p className=" text-red-600">{errorText}</p> : null}
            <Button className="w-24" onClick={addPassword}> ขั้นถัดไป </Button>
          </div>
        </div>
      )
    }
  }
}