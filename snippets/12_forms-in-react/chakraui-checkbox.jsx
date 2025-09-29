const [checked, setChecked] = useState(true);

<Field.Root>
    <Checkbox.Root
        checked={checked}
        onCheckedChange={(e) => setChecked(!e.checked)}
    >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>
            Accept terms and conditions
        </Checkbox.Label>
    </Checkbox.Root>
</Field.Root>