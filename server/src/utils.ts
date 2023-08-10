export async function getProjectComponents({
    project = 'it8lAdrjxQ0oTUUeX4V4',
}) {
    
    const res = await fetch(
        `https://api.framer.com/modules/v1/modules/?projectId=${project}`,
        {
            headers: {
                accept: '*/*',
                'accept-language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
                authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtpZF9sZWdhY3kifQ.eyJ1c2VySWQiOiI3MmU2YWQyZS05NWUwLTRlM2EtOTgzMS03ZDJmNjgxZWQ3MmUiLCJzZXNzaW9uSWQiOiI5NTFkZmJjYS0yNDRlLTRiOTAtODdlYy0xYWJiOTBkMjAyOTYiLCJzY29wZSI6InVzZXIiLCJzY29wZXMiOiI0MDk1IiwicGF5bG9hZCI6eyJmaXJzdE5hbWUiOiJNT1JTRSIsImxhc3ROYW1lIjoiZHIiLCJhdmF0YXIiOiJodHRwczovL2QxdHM0M2R5cGs4YnFoLmNsb3VkZnJvbnQubmV0L3YxL2F2YXRhcnMvZDRhOTgxNDMtNDljOC00OTRiLWE4NTMtYzZkYmNkYTI5YWVkIiwiZW1haWwiOiJ0LmRlLnJvc3NpLjAxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibW9yc2VlZSJ9LCJpYXQiOjE2OTE2NzY4MzIsImV4cCI6MTY5MTY3NzQzMiwiaXNzIjoic3ZjOmFjY2Vzcy10b2tlbi1zZXJ2aWNlIiwic3ViIjoidXNlcjo3MmU2YWQyZS05NWUwLTRlM2EtOTgzMS03ZDJmNjgxZWQ3MmUiLCJqdGkiOiJEaWRxdTFCUjV3In0.Sn2vQRx7c2Tl6iRDCJ70nmZaF2F6WgSjgfv2rDqt5KoIybzpJ32xQDMlbyeYDg5FDmkh1qqfcsOt5JHUbdscQ2hnw57T5k8OVod-XedSPYpTb9tW_FkF-TJBhiUXZIr59mXnw4B_zroC_8-zPUyq0Cu1l3zHWAwBmmNOTYumNwkcwx5SVD8Kc1c4bKvbp5qtSJy-Q29yGk6cRTldJeH1NwrvBxijWiSAHalZSO2iIVXsXOD4vuxureeO86ZfnWpxuSnqtsiB9ewFrwTcSpW03Tw1kvTM9UbLekILakzH7BV5qtsrLTgogTTYg0ZOxn40SRTty0kK9ruxQdI7lBmHCQ',
                'sec-ch-ua':
                    '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                // cookie: `visitor_id=16772336393960.20322338397638773; _fbp=fb.1.1677233639562.310255981; g_state={"i_l":0}; session=30b1a9a4-3827-4ff1-afad-6f3875172d09; session.embed=6f990ec7-4d57-436d-be59-7555636dc1bc; _gcl_au=1.1.1554662435.1686156616; _fprom_ref=morse; _fprom_tid=241ef475-5a52-45df-9c40-b2fdc1bc2067; cookie_consent=allow; _gcl_aw=GCL.1691501827.Cj0KCQjwz8emBhDrARIsANNJjS6GK-kWldRAw_EcFl6ELzFbRH-0kfwSSvjqXO21rz5Tuzn7yvDLzk0aAsEkEALw_wcB; _ga=GA1.2.1706973177.1677233637; _gac_UA-37076997-1=1.1691501827.Cj0KCQjwz8emBhDrARIsANNJjS6GK-kWldRAw_EcFl6ELzFbRH-0kfwSSvjqXO21rz5Tuzn7yvDLzk0aAsEkEALw_wcB; _ga_QZ2MPXED80=GS1.1.1691501826.95.1.1691502498.0.0.0; _gid=GA1.2.1861352743.1691675813`,
            },
            referrer: 'https://framer.com/',
            referrerPolicy: 'strict-origin-when-cross-origin',
            body: null,
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        },
    )
    if (!res.ok) {
        throw new Error(
            `Could not fetch project components: ${
                res.status
            } ${await res.text()}`,
        )
    }
    const json = await res.json()
    return json
}
