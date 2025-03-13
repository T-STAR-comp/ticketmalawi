export const generateQRCodes = async (url, numQRcodes, baseIdentifier,EventName,TicketHolder,EventTime,TicketType,EventDate,Venue) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numQRcodes: numQRcodes,
                baseIdentifier: baseIdentifier,
                EventName:EventName,
                TicketHolder:TicketHolder,
                EventTime:EventTime,
                TicketType:TicketType,
                EventDate:EventDate,
                Venue:Venue
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
        }

        return await response.json();
    }
    catch(error) {
        window.alert(err);
        throw error;
    }
}