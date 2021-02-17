import React from 'react';
import s from './dialogs.module.css'

const  Dialogs= (props) => {
    return(
        <div className={s.dialogs}>
             <div className={s.dialogsItems}>
                  <div className={s.item + '' + s.active}>
                      Nergal
                     </div> 
                     <div className={s.item}>
                       Varg
                    </div> 
                     <div className={s.item}>
                      Faust
                     </div> 
                     <div className={s.item}>
                     Dead
                    </div> 
                    </div>
                 <div className={s.messages}>
                    <div className={s.message }> hello varg</div>
                    <div className={s.message}> hello faust</div>
                    <div className={s.message}> hello alive man</div>
                 </div>
             
        </div>
    )

}

export default Dialogs