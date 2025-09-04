<Field.Root invalid={errors.email}>
    <Field.Label>Email</Field.Label>

    <Input placeholder="you@example.com" />

    <Field.HelperText>We'll never share your email!</Field.HelperText>
    { errors.email && <Field.ErrorText>{errors.email}</Field.ErrorText> }
</Field.Root>