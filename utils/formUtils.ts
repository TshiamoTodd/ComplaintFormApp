import { useForm } from "react-hook-form";

export const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
        fullName: '',
        contactNumber: '',
        email: '',
        incidentDescription: '',
        typeOfFeedback: '',
        busNumber: '',
        route: '',
        driverName: '',
        dateOfIncident: '',
        timeOfIncident: '',
        locationOfIncident: '',
        followUpRequest: '',
        finalConfirmation: ''
    }
});