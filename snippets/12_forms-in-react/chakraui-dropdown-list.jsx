const [selected, setSelected] = React.useState("");

<Field.Root>
    <Field.Label>Favorite fruit</Field.Label>
    <NativeSelect
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
    >
        <option value="" disabled>
            Select a fruit
        </option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
    </NativeSelect>
    <Field.HelperText>You can only pick one.</Field.HelperText>
</Field.Root>