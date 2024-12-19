
const SendQrData = (UID_DATA)=>{
    const execute = async () =>{
        try {
            const res = await fetch ('http://localhost:8080/api/updatedb/ticketuid/ticketmalawi/valid',{
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