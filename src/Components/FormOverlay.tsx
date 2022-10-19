import { useState, useRef, useEffect } from "react";
import sgMail from '@sendgrid/mail'

const initialData = {
  name: "",
  doctor: "",
  pregnancy: "No",
  births: "No",
  caesareans: "No",
  abortions: "No",
  pregnancyWeeks: "12",
  pain: "No",
  objectives: "",
  contact: "",
};

interface initialData {
  name: string;
  doctor: string;
  pregnancy: string;
  births: string;
  caesareans: string;
  abortions: string;
  pregnancyWeeks: string;
  pain: string;
  objectives: string;
  contact: string;
}

const Stage1 = ({ handleChange }:{ handleChange: Function }) => (
  <>
    <label htmlFor="name" className=" flex flex-col w-full items-start gap-1">
      <span className="text-xs font-semibold uppercase">Nombre</span>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        id="name"
        name="name"
        className="focus:outline-none border border-indigo-100 rounded p-2 w-full font-semibold bg-white bg-opacity-30"
        required
      />
    </label>
    <label htmlFor="doctor" className=" flex flex-col w-full items-start gap-1">
      <span className="text-xs font-semibold uppercase">Medico Tratante</span>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        id="doctor"
        name="doctor"
        className="focus:outline-none border border-indigo-100 rounded p-2 w-full font-semibold bg-white bg-opacity-30"
      />
    </label>
    <label
      htmlFor="contact"
      className=" flex flex-col w-full items-start gap-1"
    >
      <span className="text-xs font-semibold uppercase">
        Teléfono de contacto
      </span>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        id="contact"
        name="contact"
        className="focus:outline-none border border-indigo-100 rounded p-2 w-full font-semibold bg-white bg-opacity-30"
        required
      />
    </label>
    
  </>
);

const Stage2 = ({userInfo, handleChange}:{userInfo: initialData, handleChange: Function}) => (
  <>
    <div className=" flex flex-col w-full items-start gap-1">
      <span className="text-xs font-semibold uppercase my-1">
        Número de embarazo
      </span>
      <div
         onChange={(e) => handleChange(e)}
         className="flex justify-around w-full"
      >
        <label htmlFor="pregnancy-no">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.pregnancy === 'No' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>No</span>
          <input className="invisible w-0 h-0" id="pregnancy-no" type="radio" name="pregnancy" value="No"/>
        </label>
        <label htmlFor="pregnancy-1">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.pregnancy === '1' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>1</span>
          <input className="invisible w-0 h-0" id="pregnancy-1" type="radio" name="pregnancy" value="1" />
        </label>
        <label htmlFor="pregnancy-2">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.pregnancy === '2' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>2</span>
          <input className="invisible w-0 h-0" id="pregnancy-2" type="radio" name="pregnancy" value="2" />
        </label>
        <label htmlFor="pregnancy-3">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.pregnancy === '3+' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>3+</span>
          <input className="invisible w-0 h-0" id="pregnancy-3" type="radio" name="pregnancy" value="3+" />
        </label>
      </div>
    </div>

    <div className=" flex flex-col w-full items-start gap-1">
      <span className="text-xs font-semibold uppercase my-1">
        Número de Partos
      </span>
      <div
         onChange={(e) => handleChange(e)}
         className="flex justify-around w-full"
      >
        <label htmlFor="births-no">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.births === 'No' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>No</span>
          <input className="invisible w-0 h-0" id="births-no" type="radio" name="births" value="No"/>
        </label>
        <label htmlFor="births-1">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.births === '1' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>1</span>
          <input className="invisible w-0 h-0" id="births-1" type="radio" name="births"  value="1" />
        </label>
        <label htmlFor="births-2">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.births === '2' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>2</span>
          <input className="invisible w-0 h-0" id="births-2" type="radio" name="births" value="2" />
        </label>
        <label htmlFor="births-3">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.births === '3+' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>3+</span>
          <input className="invisible w-0 h-0" id="births-3" type="radio" name="births" value="3+" />
        </label>
      </div>
    </div>
    <div className=" flex flex-col w-full items-start gap-1">
      <span className="text-xs font-semibold uppercase my-1">
        Número de cesáreas
      </span>
      <div
         onChange={(e) => handleChange(e)}
         className="flex justify-around w-full"
      >
        <label htmlFor="caesareans-no">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.caesareans === 'No' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>No</span>
          <input className="invisible w-0 h-0" id="caesareans-no" type="radio" name="caesareans" value="No"/>
        </label>
        <label htmlFor="caesareans-1">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.caesareans === '1' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>1</span>
          <input className="invisible w-0 h-0" id="caesareans-1" type="radio" name="caesareans" value="1" />
        </label>
        <label htmlFor="caesareans-2">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.caesareans === '2' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>2</span>
          <input className="invisible w-0 h-0" id="caesareans-2" type="radio" name="caesareans" value="2" />
        </label>
        <label htmlFor="caesareans-3">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.caesareans === '3+' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>3+</span>
          <input className="invisible w-0 h-0" id="caesareans-3" type="radio" name="caesareans" value="3+" />
        </label>
      </div>
    </div>
    <div className=" flex flex-col w-full items-start gap-1">
      <span className="text-xs font-semibold uppercase my-1">
        ¿Has tenido algun aborto?
      </span>
      <div
         onChange={(e) => handleChange(e)}
         className="flex justify-around w-full"
      >
        <label htmlFor="abortions-no">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.abortions === 'No' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>No</span>
          <input className="invisible w-0 h-0" id="abortions-no" type="radio" name="abortions" value="No"/>
        </label>
        <label htmlFor="abortions-1">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.abortions === '1' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>1</span>
          <input className="invisible w-0 h-0" id="abortions-1" type="radio" name="abortions" value="1" />
        </label>
        <label htmlFor="abortions-2">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.abortions === '2' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>2</span>
          <input className="invisible w-0 h-0" id="abortions-2" type="radio" name="abortions" value="2" />
        </label>
        <label htmlFor="abortions-3">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.abortions === '3+' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>3+</span>
          <input className="invisible w-0 h-0" id="abortions-3" type="radio" name="abortions" value="3+" />
        </label>
      </div>
    </div>
  </>
);

const Stage3 = ({userInfo, handleChange}:{userInfo: initialData, handleChange: Function}) => (
  <>
<label htmlFor="pregnancyWeeks" className="w-full flex flex-col">
<span className="text-xs font-semibold uppercase my-1">Semanas de embarazo</span>
<input onChange={(e) => handleChange(e)} type="range" name="pregnancyWeeks" id="pregnancyWeeks"  className="w-full" value={userInfo.pregnancyWeeks} min="0" max="42"/>
    <span className="mx-auto mt-2 border-b border-white px-2">{userInfo.pregnancyWeeks} Semanas</span>
</label>
<div className=" flex flex-col w-full items-start gap-1">
      <span className="text-xs font-semibold uppercase my-1">
        ¿Presentas dolor en alguna zona del cuerpo?
      </span>
      <div
         onChange={(e) => handleChange(e)}
         className="flex justify-evenly w-full mt-2"
      >
        <label htmlFor="pain-no">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.pain === 'No' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>No</span>
          <input className="invisible w-0 h-0" id="pain-no" type="radio" name="pain" value="No"/>
        </label>
        <label htmlFor="pain-yes">
          <span className={`bg-opacity-40 border px-4 py-1 rounded ${userInfo.pain === 'Sí' ? 'bg-indigo-500 border-indigo-200': 'bg-white border-white'}`}>Sí</span>
          <input className="invisible w-0 h-0" id="pain-yes" type="radio" name="pain"  value="Sí" />
        </label>
      </div>
    </div>
    <label htmlFor="objectives" className=" flex flex-col w-full items-start gap-1">
      <span className="text-xs font-semibold uppercase">¿Qué pretendes lograr de la mano de Pro Mom?</span>
      <textarea
        onChange={(e) => handleChange(e)}
        id="objectives"
        name="objectives"
        className="focus:outline-none border border-indigo-100 rounded p-2 w-full font-semibold bg-white bg-opacity-30"
      />
    </label>
  </>
);


const FormOverlay = ({ onClose }: { onClose: Function }): JSX.Element => {
  const formy:any = useRef(null);
  const [userInfo, userInfoSet] = useState(initialData);
  const [stage, stageSet] = useState(1);
  const [errors, errorsSet] = useState('');
  const [contact, contactSet] = useState('');
  const handleChange = (e: { target: { name: keyof typeof userInfo; value: string; }; }) => {
    const newState = {...userInfo}
    newState[e.target.name] = e.target.value;
    userInfoSet(newState)
  }

  const handleStageChange = (step: number) => {
    errorsSet('')
    const validation = formy.current.checkValidity();
    if(!validation) errorsSet('Hay campos sin llenar!')
    else{
      if (step > 0) {
        if (stage < 3) stageSet(stage + step);
      }
      if (step < 0) {
        if (stage > 1) stageSet(stage + step);
      }  
    }
    
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    fetch('https://promom-back.vercel.app/api/mail', {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(userInfo) 
    }).then((res) => {
      console.log(res.status)
      contactSet('success')
    }).catch((error) => {
      console.log(error)
      contactSet('fail')
    })
   }

   
   if(contact === 'fail') return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="w-10/12 md:w-1/2 xl:w-1/4 rounded-xl border-2 bg-indigo-100 bg-opacity-30 backdrop-blur-sm border-violet-200 px-8 pt-4 pb-24 relative">
        <h1 className="text-stone-900 text-2xl font-semibold text-center my-4">
          Contacto Promom
        </h1>
        <p className="font-semibold text-lg">Algo ha salido mal, por favor contactanos al emal: aurora250197@gmail.com </p>
      </div>
      </div>
   )
   if(contact === 'sucess') return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="w-10/12 md:w-1/2 xl:w-1/4 rounded-xl border-2 bg-indigo-100 bg-opacity-30 backdrop-blur-sm border-violet-200 px-8 pt-4 pb-24 relative">
        <h1 className="text-stone-900 text-2xl font-semibold text-center my-4">
          Contacto Promom
        </h1>
        <p className="font-semibold text-lg">Gracias por Contactarnos, vamos a contactarte mediante WhatsApp pronto! </p>
      </div>
      </div>
   )

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="w-10/12 md:w-1/2 xl:w-1/4 rounded-xl border-2 bg-indigo-100 bg-opacity-30 backdrop-blur-sm border-violet-200 px-6 relative">
        <h1 className="text-stone-900 text-2xl font-semibold text-center my-4">
          Contacto Promom
        </h1>
        <form ref={formy} onSubmit={(e) => handleSubmit(e)} action="POST" className="flex flex-col w-full items-start gap-8 pb-20">
          {stage === 1 && <Stage1 handleChange={handleChange} />}
          {stage === 2 && <Stage2 userInfo={userInfo} handleChange={handleChange} />}
          {stage === 3 && <Stage3 userInfo={userInfo} handleChange={handleChange} />}
          { <span className="w-full text-center text-red-600">{errors}</span> }
          <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
            <button className="border border-indigo-300 bg-white hover:bg-opacity-30 hover:bg-indigo-600 hover:text-white bg-opacity-30 px-4 py-1 rounded" type="button" onClick={() => handleStageChange(-1)}>
              Atras
            </button>
            {stage === 3 && <button className="border border-indigo-300 bg-white hover:bg-opacity-30 hover:bg-indigo-600 hover:text-white bg-opacity-30 px-4 py-1 rounded" type="submit">Enviar</button>}
            {stage !== 3 &&<button className="border border-indigo-300 bg-white hover:bg-opacity-30 hover:bg-indigo-600 hover:text-white bg-opacity-30 px-4 py-1 rounded" type="button" onClick={() => handleStageChange(+1)}>
              Adelante
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOverlay;
