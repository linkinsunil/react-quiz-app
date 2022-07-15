function ErrorMessage({ children }) {
  return (
    <div
      className='error_message'
      style={{
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: 'orangered',
        textAlign: 'center',
        color: 'white',
        textTransform: 'capitalize',
      }}
    >
      {children}
    </div>
  );
}

export default ErrorMessage;
