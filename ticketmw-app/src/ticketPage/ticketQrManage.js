
const SendQrData = (UID_DATA)=>{
    const execute = async () =>{
        try {
            const res = await fetch (import.meta.env.VITE_TicketUIDSendURL,{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(UID_DATA),
            });
            const data = await res.json();

            console.log(data);
        }
        catch(err) {
            //console.log(err);
        }
    }
    execute();

};

export default SendQrData;