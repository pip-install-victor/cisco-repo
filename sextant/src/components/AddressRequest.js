import React, { useState, useEffect } from 'react';
import './AddressRequest.css';

function AddressRequest({ ipVersion }) {
    const [ipAddress, setIpAddress] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = ipVersion === 'v6'
        ? 'https://api6.ipify.org?format=json'
        : 'https://api.ipify.org?format=json';

        async function fetchIp() {
        try {
            setLoading(true);
            const response = await fetch(url);
            
            if (!response.ok) {
            throw new Error(`Response wasn't ok: ${response.statusText}`);
            }
            
            const data = await response.json();
            setIpAddress(data.ip);
            setError(null);
        } catch (err) {
            setError(err.message);
            setIpAddress(null);
        } finally {
            setLoading(false);
        }
        }

        fetchIp();
    }, [ipVersion]);

    let content;
    if (loading) {
        content = <p>Loading...</p>;
    } else if (error) {
        content = <p className="ip-error">Error: {error}</p>;
    } else {
        content = <p className="ip-address">{ipAddress}</p>;
    }

    return (
        <div className="address-request">
        {content}
        </div>
    );
    }

export default AddressRequest;
