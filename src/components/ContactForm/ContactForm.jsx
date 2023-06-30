import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import './ContactForm.scss';
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = '6b531da6-35a3-4344-995f-10e0a26e3b18';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'PS Design',
      subject: 'Demande de contact depuis le site web de PS Design',
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
        <input
          type='checkbox'
          id=''
          className='hidden'
          style={{ display: 'none' }}
          {...register('botcheck')}
        ></input>

        <div className='contact-form__input--field'>
          <div
            className={`contact-form__input--wrapper ${
              errors.name
                ? 'contact-form__input--error'
                : 'contact-form__input--valid'
            }`}
          >
            <input
              type='text'
              placeholder='Votre nom'
              autoComplete='false'
              className='contact-form__input'
              {...register('name', {
                required: 'Votre nom est requis',
                maxLength: 80,
              })}
            />
          </div>
          {errors.name && (
            <div className='contact-form__input--error-message'>
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className='contact-form__input--field'>
          <div
            className={`contact-form__input--wrapper ${
              errors.email
                ? 'contact-form__input--error'
                : 'contact-form__input--valid'
            }`}
          >
            <input
              id='email_address'
              type='email'
              placeholder='Votre adresse mail'
              name='email'
              className='contact-form__input'
              {...register('email', {
                required: 'Votre email est requis',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message:
                    "Nous aurons besoin d'une adresse mail pour vous recontacter",
                },
              })}
            />
          </div>
          {errors.email && (
            <div className='contact-form__input--error-message'>
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className='contact-form__input--field'>
          <div
            className={`contact-form__input--wrapper ${
              errors.message
                ? 'contact-form__input--error'
                : 'contact-form__input--valid'
            }`}
          >
            <textarea
              name='message'
              placeholder='Votre message'
              className='contact-form__input'
              {...register('message', {
                required: "Merci d'entrer votre message",
              })}
            />
          </div>
          {errors.message && (
            <div className='contact-form__input--error-message'>
              {' '}
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button type='submit' className='contact-form__submit'>
          {isSubmitting ? (
            <svg
              className='animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              width='15px'
              height='15px'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          ) : (
            'Envoyer'
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className='contact-form__submit--success-message'>
          {
            'Nous avons bien reçu votre message ! Nous vous recontacterons au plus vite :)'
          }
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className='contact-form__submit--error-message'>
          {
            "Oups, on dirait qu'il y a eu une erreur de parcours, merci de réessayer plus tard."
          }
        </div>
      )}
    </div>
  );
}
