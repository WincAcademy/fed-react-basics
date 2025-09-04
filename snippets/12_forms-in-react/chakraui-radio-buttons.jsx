const [value, setValue] = React.useState("email");

<Field.Root>
    <Field.Label>Preferred contact method</Field.Label>
    <RadioGroup value={value} onChange={setValue}>
        <Radio value="email">Email</Radio>
        <Radio value="phone">Phone</Radio>
        <Radio value="mail">Mail</Radio>
    </RadioGroup>
    <Field.HelperText>Choose one!</Field.HelperText>
</Field.Root>