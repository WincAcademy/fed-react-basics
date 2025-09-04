const [checked, setChecked] = React.useState(true);

<Field.Root>
    <Checkbox
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
    >
        I agree to the terms and conditions
    </Checkbox>
</Field.Root>