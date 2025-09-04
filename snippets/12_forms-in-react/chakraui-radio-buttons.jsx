const [value, setValue] = React.useState("email");

<Field.Root>
    <Field.Label>Preferred contact method</Field.Label>
    <RadioGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
        <HStack gap="4">
            <RadioGroup.Item value="email">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                    Email
                </RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="phone">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                    Phone
                </RadioGroup.ItemText>
            </RadioGroup.Item>
        </HStack>
    </RadioGroup.Root>
    <Field.HelperText>Choose one!</Field.HelperText>
</Field.Root>