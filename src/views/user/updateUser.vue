<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"/>
        </FormItem>
        <FormItem label="真实姓名" prop="trueName">
            <Input v-model="formValidate.trueName" placeholder="Enter your trueName"/>
        </FormItem>
        <FormItem label="职位" prop="position">
            <Input v-model="formValidate.position" placeholder="Enter your position"/>
        </FormItem>
        <FormItem label="所属刊名" prop="publicationName">
            <Input v-model="formValidate.publicationName" placeholder="Enter your publication name"/>
        </FormItem>
        <FormItem label="角色" prop="role">
            <Input v-model="formValidate.role" placeholder="Enter your role"/>
        </FormItem>
        <FormItem label="编辑部" prop="editorialBoard">
            <Select v-model="formValidate.editorialBoard" placeholder="Select your editorial board">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <!-- <FormItem label="Date">
            <Row>
                <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Gender" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem> -->
        <FormItem>
            <Button type="primary" @click="updateUserById('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        name: "updateUser",
        data () {
            return {
                formValidate: {
                    name: '',
                    trueName: '',
                    position: '',
                    publicationName: '',
                    role: '',
                    editorialBoard: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    trueName: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    position: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    publicationName: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    role: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    editorialBoard: [
                        { required: true, message: 'Please select the editorial board', trigger: 'change' }
                    ]
                    // mail: [
                    //     { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    //     { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    // ],
                    // city: [
                    //     { required: true, message: 'Please select the city', trigger: 'change' }
                    // ],
                    // gender: [
                    //     { required: true, message: 'Please select gender', trigger: 'change' }
                    // ],
                    // interest: [
                    //     { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    //     { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    // ],
                    // date: [
                    //     { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    // ],
                    // time: [
                    //     { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    // ],
                    // desc: [
                    //     { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    //     { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    // ]
                }
            }
        },
        methods: {
            updateUserById (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch("updateUserById").then(response => {
                            // debugger
                            this.updateUserById = response
                            console.log(response)
                            this.$Message.success('Success!');
                        }); 
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>