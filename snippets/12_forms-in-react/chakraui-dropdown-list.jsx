const [selected, setSelected] = useState("");

<Field.Root>
    <Field.Label>Favorite fruit</Field.Label>
    <NativeSelect.Root
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
    >
        <NativeSelect.Field>
            <option disabled>
                Select a fruit
            </option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
        </NativeSelect.Field>

        <NativeSelect.Indicator/>
    </NativeSelect.Root>
    <Field.HelperText>You can only pick one.</Field.HelperText>
</Field.Root>