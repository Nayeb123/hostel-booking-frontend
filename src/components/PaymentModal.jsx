import React from 'react';

export default function PaymentModal({ 
  isOpen, 
  onClose, 
  selectedPayment, 
  onPaymentSelect,
  onPaymentSubmit,
  isProcessing,
  room
}) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Select Payment Method</h2>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={selectedPayment === 'bank'}
              onChange={() => onPaymentSelect('bank')}
            />
            Bank Transfer
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="mobileMoney"
              checked={selectedPayment === 'mobileMoney'}
              onChange={() => onPaymentSelect('mobileMoney')}
            />
            Mobile Money
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={selectedPayment === 'cash'}
              onChange={() => onPaymentSelect('cash')}
            />
            Cash Payment
          </label>
        </div>
        {room && (
          <div className="payment-summary">
            <h3>Payment Summary</h3>
            <p>Room Type: {room.name}</p>
            <p>Amount: GH₵{room.price}</p>
          </div>
        )}
        <button 
          onClick={onPaymentSubmit}
          disabled={!selectedPayment || isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </div>
    </div>
  );
}
