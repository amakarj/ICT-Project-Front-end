import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';


function FallentreeForm() {
  
    const [formData, saveFormData] = useState();
    const { register, handleSubmit, watch, setValue} = useForm();
      
    const onSubmit = data => {saveFormData(data)};
    console.log("Submitted data ",formData);

    useFormPersist("storageKey", {
      watch, 
      setValue,
      storage: window.localStorage, // default window.sessionStorage
    });


    const watchEstaakoLiikennetta = watch("estaakoLiikennetta");
    const watchIhmisvahinkoa = watch("ihmisvahinko");
      
      return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Mikä on puiden lukumäärä?</label>
                < br/>
            <label id="111"><input {...register("puidenlkm")} type="radio" value="1" />1</label>
            <label id="112"><input {...register("puidenlkm")} type="radio" value="2" />2</label>
            <label id="113"><input {...register("puidenlkm")} type="radio" value="3"  style={{color:'red'}}/>3</label>
            <label id="114"><input {...register("puidenlkm")} type="radio" value="monta" />Monta</label>
                <br />
                <br />

            <label>Missä puu sijaitsee?</label>
                < br/>
            <label id="121"><input {...register("sijainti")} type="radio" value="yksityinen" />Yksityinen alue</label>
            <label id="122"><input {...register("sijainti")} type="radio" value="julkinen" />Julkinen alue</label>
           
                <br />
                <br />    
    
          <label>Estääkö tapahtuma liikennettä?</label>
                < br/>
          <label id="131"><input {...register("estaakoLiikennetta", { required: true })} type="radio" value="kylla" /> Kyllä</label>
          <label id="132"><input {...register("estaakoLiikennetta", { required: true })} type="radio" value="ei" /> Ei</label>

                <br />
                <br />

          {watchEstaakoLiikennetta === "kylla" && (
            <div>

                <label>Mitä liikennettä?</label>
                    < br/>
                <label id="13111"><input {...register("mitaLiikennetta")} type="radio" value="moottoritie"/>Moottoritie</label>
                <label id="13112"><input {...register("mitaLiikennetta")} type="radio" value="maantie" />Maantie</label>
                <label id="13113"><input {...register("mitaLiikennetta")} type="radio" value="taajama" />Taajama</label>
                <label id="13114"><input {...register("mitaLiikennetta")} type="radio" value="junaraiteet" />Junaraiteet</label>
                <label id="13115" ><input {...register("mitaLiikennetta")} type="radio" value="pihatie"/>Pihatie</label>
                <label id="13116"><input {...register("mitaLiikennetta")} type="radio" value="kevyt" />Kevyen liikenteen väylä</label>
                    <br />
                    <br />
              </div>
          )}
          
          <label>Onko ihmisvahinkoa?</label>
              < br/>
          <label id="141"><input {...register("ihmisvahinko", { required: true })} type="radio" value="kylla" />Kyllä</label>
          <label  id="142"><input {...register("ihmisvahinko", { required: true })} type="radio" value=" ei" />Ei</label>
              <br />
              <br />

          {watchIhmisvahinkoa === "kylla" && (
          <div>
              
              <label>Monta ihmistä on vahingoittunut?</label>
                  < br/>
              <label id="14111"><input {...register("ihmistenlkm")} type="radio" value="1" />1</label>
              <label id="14112"><input {...register("ihmistenlkm")} type="radio" value=" 2" />2</label>
              <label id="14113"><input {...register("ihmistenlkm")} type="radio" value=" 3" />3</label>
              <label id="14114"><input {...register("ihmistenlkm")} type="radio" value=" useita"/>Useita</label>
                  <br />
                  <br />

                  <label>Millaista vahinkoa?</label>
                  < br/>
              <label id="14121" ><input {...register("mitaVahinkoa")} type="radio" value="lieva"/>Lievästi loukkaantunut</label>
              <label id="14122"><input {...register("mitaVahinkoa")} type="radio" value=" vakava" />Vakavasti loukkaantunut</label>
              <label id="14123"><input {...register("mitaVahinkoa")} type="radio" value=" eloton" />Eloton</label>
            
                  <br />
                  <br />
          </div>
          )}
          <input type="submit" />
        </form>
      );
    
}

export default FallentreeForm;