const [email, setEmail] = React.useState('');

<Field.Root invalid={errors.email}>
    <Field.Label>Email</Field.Label>

    <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="johndoe@email.com"
    />

    <Field.HelperText>We'll never share your email!</Field.HelperText>
    { errors.email && <Field.ErrorText>{errors.email}</Field.ErrorText> }
</Field.Root>