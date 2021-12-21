import { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

import { verifyRecaptcha } from "../api/recaptcha-verify";

const Recaptcha = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [verificationPassed, setVerificationPassed] = useState(false);


    const onChange = token => {
        verifyRecaptcha("https://www.google.com/recaptcha/api/siteverify", {
            secret: "6LcIHrwdAAAAAA45p44qzlxtE8ijZlMitRQGkan_",
            response: token
         }
        ).then(resp => setVerificationPassed(true)).catch(err => setVerificationPassed(false))
    }

    const onSubmit = e => {
        e.preventDefault();
        
        if (!checkboxValue) {
            return;
        }

        setIsFormSubmitted(true);
    }


    return (
        <div>
            {!isFormSubmitted && (
                <form action="submit" onSubmit={onSubmit}>
                    <span>
                        Are u human?
                        <input
                            type="checkbox"
                            value={checkboxValue}
                            onChange={e => setCheckboxValue(e.target.value)}
                        />   
                    </span>
                    <button>
                        Submit
                    </button>
                </form>
            )}
            {isFormSubmitted && (
                <ReCAPTCHA
                    onChange={onChange}
                    sitekey="6LcIHrwdAAAAAKh4CrTWy-TzS65_W-VVvC3pcwei"
                    onErrored={() => setVerificationPassed(false)}
                />
            )}
            {verificationPassed && (
                <p>
                    OK u r human
                </p>
            )}
        </div>
    )
}

export default Recaptcha;
